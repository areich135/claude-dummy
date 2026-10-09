# TEKU Klickdummy (Claude)

Interaktiver Klickdummy der TEKU-Produktdetailseite (VCG-Rundtöpfe 5°), Basis: Adobe-XD-Entwurf + poeppelmann.com.
Live: https://areich135.github.io/claude-dummy/

## Versionen

Jede Version liegt vollständig in `versions/<id>/` und bleibt unverändert, wenn neue dazukommen.
Umschalter oben links (Liste aus `versions.json`), Direktlink: `?version=v1`. Die Startseite öffnet immer die neueste Version.

| Version | Datum | Änderungen |
|---|---|---|
| V1 | 2026-10-09 | Startstand: ChatGPT-V2 aus `areich135/GPT` 1:1 übernommen (Filter-Icons, einklappbarer Filter, Boden/Rand-Modal) |
| V2 | 2026-10-09 | Sticky-Spalte rechts mit **Ihre Angebote / Ihre Muster / Ihre Merkliste** (Prinzip united-domains): Muster/Angebot/Herz an der Zeile setzen den Artikel auf die Liste (Haken im Button), aus der Merkliste per Icon zu Muster/Angebot verschieben, × entfernt, „Angebot anfragen"/„Muster anfordern" öffnen das Formular mit allen Listenartikeln. Sammel-Buttons unter der Liste befüllen die Listen. Artikelspalte endet bündig mit den Hero-Kästen, Zeilen passen sich der Breite an (kein Abschneiden mehr, Spalten bündig). Farbnamen im Filter brechen am „/" statt mitten im Wort. Fix: Muster/Angebot-Buttons überlappen im aktiven Zustand nicht mehr die Icons. Tablet/Mobil: Listen als Karten über dem Katalog. |

## Neue Version anlegen

1. `versions/vN` nach `versions/vN+1` kopieren und ändern
2. Eintrag in `versions.json` und in der Tabelle oben ergänzen
3. Commit + Push → GitHub Pages aktualisiert sich nach ~1 Minute

Muster-/Angebotsformulare simulieren nur, es wird nichts übertragen oder gespeichert.
