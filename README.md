# BT 

## Prototype

[Link](https://dennishva.github.io/browser-technologies-2223/)

## Functionaliteit

<img width="854" alt="Scherm­afbeelding 2023-05-26 om 00 15 10" src="https://github.com/DennisHvA/real-time-web-2223/assets/94405795/037026cd-ae71-4355-8198-e4c93059abc6">

De belangrijkste functionaliteit is het ontwerpen van het t shirt.

Hieruit heb ik de volgende functionaliteiten gemaakt

- Het invoeren van voorkeuren voor het t-shirt
- Een preview geven van hoe mijn t-shirt eruit komt te zien
- Het opslaan van de data 
- Een overzichts pagina van de T-Shirts
- Feedback als een formulier niet goed wordt ingevuld

### Functional/reliable

<img width="1433" alt="Scherm­afbeelding 2023-05-26 om 00 48 39" src="https://github.com/DennisHvA/real-time-web-2223/assets/94405795/004d91f7-bc55-49ee-a103-e6ac7fd94d9d">

De core bestaat uit formulieren waar je voorkeuren kan opgeven om het t shirt te ontwerpen. Je kan hier de kleur, de tekst en een afbeelding toevoegen. Ook is er een formulier om je gegevens in te vullen en de t-shirts te bestellen. Oftewel alles basis dingen zijn te gebruiken.

### Usable

<img width="1436" alt="Scherm­afbeelding 2023-05-26 om 00 49 55" src="https://github.com/DennisHvA/real-time-web-2223/assets/94405795/613b67b4-cb8f-4664-b8c6-b9d7f463c742">

Hier wordt de applicatie goed te gebruiken. Eerst werkte met moeite, maar nu is het fijner om door de site te gaan. Alles heeft wat kleur gekregen en zijn er states toegevoegd. Zo kan de gebruiker goed zien of het een knop is als hij erover heen gaat. Alles heeft wat meer een layout zodat de gebruiker makkelijk door de site wordt geleid.

## Pleasurable

<img width="1431" alt="Scherm­afbeelding 2023-05-26 om 00 50 34" src="https://github.com/DennisHvA/real-time-web-2223/assets/94405795/e738e918-701c-42c5-948e-95534b76e8be">

Hier wordt het voor de site erg fijn om te gebruiken. De opgegeven voorkeuren en gegevens worden opgeslagen en als de gebruiker terugkeert op de site is niets weg! Ook wordt er voor feedback gezorgd. Als de gebruiker aan het ontwerpen is, wordt er live een preview gegenereerd van het t-shirt! Zo kan de gebruiker een idee krijgen hoe het t-shirt er in het echt uit zal zien. Ook wordt er feedback gegeven als het bestellen van het formulier fout gaat. 

## Feature Detection

In het overzicht van de t-shirts heb ik voor de styling een soort kledingkast gemaakt. Om alle t-shirts zit een section met een border, maar die sluit niet aan voor de kleding hanger. Hiervoor maak ik een gradient in elk t-shirt, waardoor hij erachter zit. Dit werkt niet in elke browser, en hierdoor valt het hele ontwerp weg. Dus als dit support heeft, is alle styling voor de kledingkast aanwezig. 

```css
@supports (background-image: linear-gradient(to bottom, transparent 0% 2%, grey 2% 6%, transparent 6%)) {
    /* als hij de gradient in een background image support ... */
}
```

Ook heb ik gekeken of de :has selector ondersteund wordt. Hiervoor heb ik een manier gevonden met JavaScript en CSS, maar hier kreeg ik problemen mee dus heb ik dit niet aanstaan. Blijkbaar kan je nog niet testen in Chrome of de :has selector gesupport wordt, want als je dit doet zegt hij dat er geen support is.

```js
if (CSS.supports(':has(*)')) {
    // als hij :has support
}
```

```css
@supports (selector(:has)) {
    /* niet zeker of dit werkt */
}
```

## Browsers

Desktop 
- Chrome 
- Safari
- Flow

Mobile
- Samsung Internet (Samsung Galaxy)
- Safari (iphone X)

## Werkwijze

Standaard gebruikt ik Chrome om te coderen. In deze browser ben ik begonnen en heb ik ook geen probleem ervaren. Voor anderhalve week heb ik in Chrome gecodeerd. Toen we de les kregen over de obscure browsers ben ik meteen daarna ook met Flow begonnen. Mijn werkwijze was dat ik ging coderen in Chrome, en meteen in Flow keek of het zou werken. De gedachte hierachter was dat in deze browser de minste features ondersteund zouden worden. Dus als het in de slechtste browser zou werken, kan ik er bijna wel vanuit gaat dat het in andere browsers ook zou werken. Hierdoor heb ik mijn ogen al vrij veel getackeld. 

### Een paar punten

#### Chrome

<img width="1431" alt="Scherm­afbeelding 2023-05-26 om 00 50 34" src="https://github.com/DennisHvA/real-time-web-2223/assets/94405795/e738e918-701c-42c5-948e-95534b76e8be">

- Alles werkt
- :has support werkt niet?

Dit is mijn standaard browser 

#### Safari

<img width="1422" alt="Scherm­afbeelding 2023-05-26 om 01 08 38" src="https://github.com/DennisHvA/real-time-web-2223/assets/94405795/ba93281f-7e86-4425-92e0-5ef19803899d">

- Alles werkt
- Mini ding: Een lege image tag geeft een icoontje

Een klein dingetje, je ziet een icoontje dat hij de afbeelding niet kan vinden. Verder werkt alles net zoals in Chrome.

#### Flow

<img width="1434" alt="Scherm­afbeelding 2023-05-26 om 01 13 27" src="https://github.com/DennisHvA/real-time-web-2223/assets/94405795/2a6a128b-c778-4c77-a396-4f33251f9cf8">

Tijdens het coderen heb ik veel vanuit Chrome geswitched naar Flow. Hieruit ben ik tot de volgende opvallende punten gekomen.

- Camera aanzetten
- Input type file laat geen naam zie
- Input type color werkt niet. Hij laat alleen #fff zien en dit is niet te veranderen
- Has selector werkt niet
- Input type text kan je geen maxlenght meegeven
- Geen local storage
- Gap werkt niet
- Background image met een gradient werkt niet

#### Samsung Internet

![Screenshot_20230526-013512_Samsung Internet](https://github.com/DennisHvA/real-time-web-2223/assets/94405795/766a0397-4799-428c-afd3-63d1549423eb)

- Niets bijzonders gevonden

Met verbazing werkte alles goed. Tijdens het coderen was ik al steeds bezig om het responsive te maken, dus had ik al veel getackeld. 

#### Safari IOS

- Alles werkt
- Soms andere styling

Ik had een paar dingentjes gevonden waar padding iets anders eruit ziet, maar niet essentieel. 

