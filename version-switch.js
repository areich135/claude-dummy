'use strict';
// Versionsumschalter: liest versions.json, jede Version liegt komplett in versions/<id>/
(() => {
  const root = new URL('./', document.currentScript.src);
  const current = (location.pathname.match(/\/versions\/([^/]+)\//) || [])[1];
  const target = id => {
    const url = new URL(`versions/${id}/`, root);
    url.hash = location.hash;
    return url.href;
  };
  const requested = new URLSearchParams(location.search).get('version');

  fetch(new URL('versions.json', root), { cache: 'no-store' })
    .then(r => r.json())
    .then(versions => {
      const ids = versions.map(v => v.id);
      if (ids.includes(requested) && requested !== current) return location.replace(target(requested));
      if (!current) return location.replace(target(ids[ids.length - 1])); // Startseite -> neueste Version

      const bar = document.createElement('nav');
      bar.className = 'version-toolbar';
      bar.setAttribute('aria-label', 'Entwurfsversion');
      bar.innerHTML = '<label for="prototype-version">Version</label><select id="prototype-version"></select><span class="version-note"></span>';
      const select = bar.querySelector('select');
      for (const v of versions) select.add(new Option(v.id.toUpperCase(), v.id));
      select.value = current;
      const info = versions.find(v => v.id === current);
      if (info) bar.querySelector('.version-note').textContent = `${info.datum} · ${info.notiz}`;
      select.addEventListener('change', e => location.assign(target(e.target.value)));
      const mount = () => document.body.prepend(bar);
      document.body ? mount() : document.addEventListener('DOMContentLoaded', mount);
    })
    .catch(() => {}); // ponytail: ohne versions.json einfach kein Umschalter
})();
