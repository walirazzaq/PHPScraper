---
image: https://api.imageee.com/bold?text=PHP:%20Scrape%20Website%20Title&bg_image=https://images.unsplash.com/photo-1542762933-ab3502717ce7
---

# Scraping des Website-Titels

Das Scraping des Titels einer Website ist einfach. Die folgenden Beispiele zeigen, wie es mit PHPScraper funktioniert.


## Einfaches Beispiel

Ein sehr einfaches Beispiel, wie man den Titel einer Website scrapen kann:

```PHP
$web = new \spekulatius\phpscraper();

// Navigieren Sie zu der Testseite - diese enthält den Titel-Tag "Lorem Ipsum"
$web->go('https://test-pages.phpscraper.de/meta/lorem-ipsum.html');

/**
 * Enthält:
 *
 * <title>Lorem Ipsum</title>
 */

// Holen Sie den Titel. Dies sollte "Lorem Ipsum" zurückgeben.
var_dump($web->title);
```


## Fehlender Titel

Fehlt der Titel, wird `null` zurückgegeben:

```PHP
$web = new \spekulatius\phpscraper();

// Navigieren Sie zu der Testseite - diese enthält keinen Titel-Tag.
$web->go('https://test-pages.phpscraper.de/meta/missing.html');

// Holen Sie den Titel. Dies sollte null zurückgeben.
var_dump($web->title);
```

Hinweis: Dies ist das Standardverhalten: Wenn ein Tag nicht gefunden wurde, weil er in der HTML-Quelle fehlt, wird `null` zurückgegeben. Wenn ein iterierbares Element leer ist (z.B. beim Scraping von Bildern von einer Seite ohne Bilder), wird ein leeres Array zurückgegeben.


## Besondere Zeichen

Laden eines Website-Titels mit deutschen Umlauten

```PHP
$web = new \spekulatius\phpscraper();

/**
 * Navigieren Sie zur Testseite. Sie enthält:
 *
 * <title>A page with plenty of German umlaute everywhere (ä ü ö)</title>
 */
$web->go('https://test-pages.phpscraper.de/meta/german-umlaute.html');

// Ausgeben Sie den Titel: "A page with plenty of German umlaute everywhere (ä ü ö)"
echo $web->title;
```

Es sollte in ähnlicher Weise mit allen UTF-8-Zeichen funktionieren.


## HTML-Elemente

HTML-Entities sollten aufgelöst werden

```PHP
$web = new \spekulatius\phpscraper();

/**
 * Navigieren Sie zur Testseite. Enthält:
 *
 * <title>Cat &amp; Mouse</title>
 */
$web->go('https://test-pages.phpscraper.de/meta/html-entities.html');

// Ausgeben Sie den Titel: "Cat & Mouse"
echo $web->title;
```

::: tip Tipp
Entitäten und Sonderzeichen wurden in der gesamten Bibliothek berücksichtigt. Wenn Sie eine Stelle finden, an der diese nicht wie erwartet funktionieren, melden Sie dies bitte unter [issue](https://github.com/spekulatius/PHPScraper/issues).
:::
