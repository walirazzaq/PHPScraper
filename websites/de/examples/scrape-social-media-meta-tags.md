---
image: https://api.imageee.com/bold?text=PHP:%20Scraping%20Social%20Tags&bg_image=https://images.unsplash.com/photo-1542762933-ab3502717ce7
---

# Scraping von Social Media Meta-Tags

Das Scraping von Social Media Sharing Tags von einer Website kann mit den folgenden Methoden durchgeführt werden. Die genaue Ergebnismenge hängt von den angegebenen Tags ab. Alle Tags werden berücksichtigt, solange sie sich im vorangestellten Namensraum befinden (z. B. `twitter:` für Twitter Cards).


## Open-Graph (OG) Daten

Das Abrufen von Open-Graph-Daten kann durchgeführt werden:

```PHP
$web = new \spekulatius\phpscraper();

/**
 * Navigieren Sie zur Testseite. Die Seite enthält:
 *
 * <!-- open graph example -->
 * <meta property="og:site_name" content="Lorem ipsum" />
 * <meta property="og:type" content="website" />
 * <meta property="og:title" content="Lorem Ipsum" />
 * <meta property="og:description" content="Lorem ipsum dolor etc." />
 * <meta property="og:url" content="https://test-pages.phpscraper.de/lorem-ipsum.html" />
 * <meta property="og:image" content="https://test-pages.phpscraper.de/assets/cat.jpg" />
 *
 * @see https://test-pages.phpscraper.de/og/example.html
 */
$web->go('https://test-pages.phpscraper.de/og/example.html');

// Sollte drucken 'Lorem Ipsum'
echo $web->openGraph['og:title'];

// Sollte drucken 'Lorem ipsum dolor etc.'
echo $web->openGraph['og:description'];

// das ganze Set:
$data = $web->openGraph;

/**
 * $data enthält jetzt:
 *
 * [
 *     'og:site_name' => 'Lorem ipsum',
 *     'og:type' => 'website',
 *     'og:title' => 'Lorem Ipsum',
 *     'og:description' => 'Lorem ipsum dolor etc.',
 *     'og:url' => 'https://test-pages.phpscraper.de/lorem-ipsum.html',
 *     'og:image' => 'https://test-pages.phpscraper.de/assets/cat.jpg',
 * ]
 */
```

::: tip Tipp
Wurden keine Daten gefunden, wird das Array leer zurückgegeben.
:::


## Twitter-Card Scrapen

Das Parsen der Twitter Card funktioniert ähnlich:

```PHP
$web = new \spekulatius\phpscraper();

/**
 * Navigieren Sie zur Testseite. Die Seite enthält die folgende Twitter-Karte:
 *
 * <!-- Twitter-Karte -->
 * <meta name="twitter:card" content="summary_large_image" />
 * <meta name="twitter:title" content="Lorem Ipsum" />
 * <meta name="twitter:description" content="Lorem ipsum dolor etc." />
 * <meta name="twitter:url" content="https://test-pages.phpscraper.de/lorem-ipsum.html" />
 * <meta name="twitter:image" content="https://test-pages.phpscraper.de/assets/cat.jpg" />
 *
 * @see https://test-pages.phpscraper.de/twittercard/example.html
 */
$web->go('https://test-pages.phpscraper.de/twittercard/example.html');

// Sollte ausgedruckt werden'summary_large_image'
echo $web->twitterCard['twitter:card'];

// Sollte ausgedruckt werden 'Lorem Ipsum'
echo $web->twitterCard['twitter:title'];

// Der gesamte Satz.
$data = $web->twitterCard;

/**
 * $data enthält jetzt:
 *
 * [
 *     'twitter:card' => 'summary_large_image',
 *     'twitter:title' => 'Lorem Ipsum',
 *     'twitter:description' => 'Lorem ipsum dolor etc.',
 *     'twitter:url' => 'https://test-pages.phpscraper.de/lorem-ipsum.html',
 *     'twitter:image' => 'https://test-pages.phpscraper.de/assets/cat.jpg',
 * ]
 */
```

Ähnlich wie bei Open Graph wird das Array leer sein, wenn keine Twitter Card Tags gefunden wurden.
