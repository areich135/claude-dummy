# TEKU Klickdummy (Claude)

Interaktiver Klickdummy der TEKU-Produktdetailseite (VCG-Rundtöpfe 5°), Basis: Adobe-XD-Entwurf + poeppelmann.com.
Live: https://areich135.github.io/claude-dummy/

## Versionen

Jede Version liegt vollständig in `versions/<id>/` und bleibt unverändert, wenn neue dazukommen.
Umschalter oben links (Liste aus `versions.json`), Direktlink: `?version=v1`. Die Startseite öffnet immer die neueste Version.

| Version | Datum | Änderungen |
|---|---|---|
| V1 | 2026-10-09 | Startstand: ChatGPT-V2 aus `areich135/GPT` 1:1 übernommen (Filter-Icons, einklappbarer Filter, Boden/Rand-Modal) |

## Neue Version anlegen

1. `versions/vN` nach `versions/vN+1` kopieren und ändern
2. Eintrag in `versions.json` und in der Tabelle oben ergänzen
3. Commit + Push → GitHub Pages aktualisiert sich nach ~1 Minute

Muster-/Angebotsformulare simulieren nur, es wird nichts übertragen oder gespeichert.
