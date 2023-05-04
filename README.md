# Web-ohjelmoinnin-sovellusprojekti

## Ilmastonmuutos kuvattuna visualisointien avulla 
 
### Projektin esittely 

Projekti on toteutettu osana Oulun Ammattikorkeakoulun tieto- ja viestintätekniikan insinöörin opintoja. Kyseessä on web-ohjelmoinnin sovellusprojekti. Projektin ideana on havainnollistaa ilmastonmuutosta yksinkertaisella nettisivulla. Sivulta löytyy informatiivisia taulukoita, joista käyttäjä näkee muun muassa maapallon lämpötilamuutoksia ja sen, kuinka lämpötila on kasvamaan päin. Nettisivu on ohjelmoitu niin, että käyttöliittymä on skaalautuva, eli käyttäjän on helppo käyttää sivua eri laitteilla. Tämä mahdollistaa sen, että kyseistä tärkeää tietoa voi tarkastella myös pienemmillä näytöillä, vaikka puhelimella! Sivulle on luotu myös käyttäjätoiminnot, joilla asiakas voi rekisteröityä palveluun, kirjautua sisään ja halutessaan poistaa käyttäjän. 

 

### Projektissa käytetyt teknologiat 

Projektimme on toteutettu modernilla teknologialla, joka yhdistää käyttäjäystävällisen React-kirjaston ja tehokkaan Java-backendin. Frontend on rakennettu Reactilla, joka on nykyaikainen ja suosittu käyttöliittymäkirjasto. React mahdollistaa reaaliaikaisen käyttöliittymän, joka reagoi nopeasti käyttäjän toimintaan ja luo mukavan käyttökokemuksen. Backend on toteutettu Javaa käyttäen. Java on yksi suosituimmista ohjelmointikielistä, joka on tunnettu tehokkuudestaan ja monipuolisuudestaan. Java soveltuu erinomaisesti monimutkaisten ohjelmien rakentamiseen, joten se oli hyvä valinta projektimme taustajärjestelmän toteuttamiseen. Näiden lisäksi ilmastonmuutosta kuvaavien visuaalisointien tekemiseen on käytetty chart.js JavaScript-kirjastoa, jotka ovat osoittautuneet erittäin hyödylliseksi ilmastonmuutoksen vaikutusten visualisoinnissa. Tietokantana käytämme MySQL:ää, joka on tunnettu tehokkuudestaan ja luotettavuudestaan. Projektimme on saatavilla GitHubissa, jossa se on avoimesti jaossa.  

 

### Ryhmän esittely 

Projekti toteutettiin neljän henkilön ryhmätyönä. Ryhmäämme kuuluu Eemeli Partanen, Joona Mehtomaa, Kasperi Rantsi ja Noora Moilanen. Ryhmän sisällä ei ole ollut mitään erityistä roolijakoa, vaan ryhmä on työskennellyt tarvittaessa yhdessä ja tehtäviä on jaettu tasaisesti kaikille.  

Aloitimme projektin tekemällä yhdessä tarvittavat dokumentit, kuten käyttöliittymäsuunnitelman ja Rest-rajapinnan suunnitelman. 

![image](https://user-images.githubusercontent.com/113541442/236176964-619cf62c-d697-4aa7-9e7a-9dd2af8965a3.png)

**KUVA 1: Projektin käyttöliittymäsuunnitelma**

### Vastuualueet 

**Noora:** Aloitin tekemällä projektille frontend-pohjan. Loin sivun ulkonäön, johon kuului aloitus-, rekisteröinti- ja kirjautumissivu. Sivujen visuaalinen ilme oli huolellisesti suunniteltu ja hienosäädetty vastaamaan projektin tarkoitusta ja asiakkaan tarpeita. Seuraavaksi aloitimme yhteistyön Kasperin kanssa backendin parissa. Käyttäen hyväksi molempien vahvuuksia, loimme tietokannan ja toteutimme käyttäjän autentikoinnin ja kirjautumistoiminnot, jotka toimivat saumattomasti yhdessä frontendin kanssa. Tämän jälkeen teimme käyttäjän poistotoiminnon, joka täydensi projektin käyttäjätoimintojen kokonaisuuden. Lopuksi yhdistin käyttäjätoiminnot ja visualisoinnit yhteen. 

**Kasperi:** Tein yhteistyössä Nooran kanssa projektin back- sekä frontendiä. Aloitimme yhteistyön backendin parissa. Yhteistyön tuloksena saimme aikaiseksi tehokkaan tietokannan ja toteutimme käyttäjän autentikointi- ja kirjautumistoiminnot, joiden avulla käyttäjät saivat turvallisesti ja helposti kirjautua sisään järjestelmään. Kun tämä oli saatu valmiiksi, lisäsimme vielä yhden tärkeän toiminnon: käyttäjän poiston. 

**Joona:** Aloitimme projektin tekemällä käyttöliittymäsuunnitelman Eemelin kanssa. Perustin ryhmällemme GitHub organisaation. Muita vastuu alueitani oli visualisointien tekeminen. Visualisointi 2 tuotti minulle aluksi odotettua enemmän haasteita, mutta projektityöskentely toimi hyvin ja sain apua Eemeliltä. 

**Eemeli:** Aloitin projektin tekemisen tekemällä projektin käyttöliittymäsuunnittelut yhdessä Joonan kanssa. Tämän jälkeen siirryin tekemään projektin visualisointeja ja pitkän taiston jälkeen sain tehtyä projektiin neljä ilmastonmuutosta kuvaavaa visualisointia. 

 

###  Projektin toiminnallisuudet 

Kirjautumistoiminnot: Asiakkaan tulee ensin rekisteröityä käyttäjäksi, jonka jälkeen hän pääsee käsiksi muihin sivun ominaisuuksiin. Aloitussivulta (KUVA 2) painaessa “Rekisteröidy” avautuu rekisteröitymisnäkymä (KUVA 3), jossa asiakkaan tulee syöttää käyttäjänimi ja salasana. Näin asiakas on luonut käyttäjän, jolla hän pääsee kirjautumaan sisään (KUVA 4) painamalla “Kirjaudu sisään” painiketta. Asiakkaan kirjauduttua sisään avautuu visualisointi (KUVA 5,6) näkymät, joita asiakas voi selata haluamansa tiedon perusteella. Sivun reunassa on myös “Poista käyttäjä” painike, josta asiakas voi halutessaan poistaa käyttäjänsä pysyvästi. Sivun yläreunassa on “Kirjaudu ulos” painike, jota painamalla käyttäjä kirjautuu ulos ja palaa takaisin aloitussivulle.

<img width="1373" alt="Nayttokuva_2023-5-3_kello_23 27 05" src="https://user-images.githubusercontent.com/113541442/236179818-b46f385e-4bc9-4589-98ef-8a8a9c329c71.png">

**KUVA 2: Aloitussivu**

![tempsnip](https://user-images.githubusercontent.com/113541442/236181021-5074213c-0d7d-4ffd-9cab-b25f19b390e4.png)

**KUVA 3: Käyttäjän luonti**

![tempsnip1](https://user-images.githubusercontent.com/113541442/236181396-f75a6549-9e61-4dae-ba94-2a7ee63a7d4c.png)

**KUVA 4: Käyttäjän sisään kirjautuminen**

### Visualisoinnit:

![tempsnip2](https://user-images.githubusercontent.com/113541442/236182481-58b56244-9df0-4080-9c27-3dd797090b88.png)

**KUVA 5: Hiilidioksidipäästöt sektoreittain**

![tempsnip3](https://user-images.githubusercontent.com/113541442/236182519-b3aa192c-3815-43d0-99ab-6f06418caac8.png)

**KUVA 6: Maapallon lämpötilan kehitys viimeisen kahden miljoonan vuoden aikana**

<img width="1371" alt="Nayttokuva_2023-5-4_kello_13 45 46" src="https://user-images.githubusercontent.com/113541442/236182715-1367d4e9-272d-4e17-a782-7b77325c8adb.png">

**KUVA 7: Käyttäjän näkymä sisään kirjauduttua**
