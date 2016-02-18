// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text,
  Presenter
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const fullscreen = {
  position: "fixed",
  top: "50%",
  left: "50%",
  minWidth: "100%",
  minHeight: "100%",
  width: "auto",
  height: "auto",
  zIndex: "2000",
  transform: "translateX(-50%) translateY(-50%)"
}

const images = {
  docker: require("../assets/large_h-dark-trans.png"),
  earth: require("../assets/earth.jpg"),
  eniac: require("../assets/eniac.jpg"),
  pdp11: require("../assets/pdp11.jpg"),
  s360: require("../assets/IBM_System360.jpg"),
  app_os_hw: require("../assets/app_os_hw.svg"),
  app_os_vm_hw: require("../assets/app_os_vm_hw.svg"),
  two_app_os_vm_hw: require("../assets/2x_app_os_vm_hw.svg"),
  download: require("../assets/download.png"),
  os_os_n: require("../assets/os_os_n.svg"),
  clicking: require("../assets/clicking.jpg"),
  hiw1: require("../assets/how_it_works_1.svg"),
  hiw2: require("../assets/how_it_works_2.svg"),
  hiw3: require("../assets/how_it_works_3.svg"),
  hiw4: require("../assets/how_it_works_4.svg"),
  hiw5: require("../assets/how_it_works_5.svg"),
  hiw6: require("../assets/how_it_works_6.svg"),
  hiw7: require("../assets/how_it_works_7.svg"),
  cgroups: require("../assets/cgroups.svg"),
  docker_architecture: require("../assets/docker_architecture.svg")
};

preloader(images);

const theme = createTheme({
  primary: "#08b7ed",
  quartenary: "#d3d3d3"
});
theme.screen.components.listItem.textIndent = "-1em";
theme.screen.components.listItem.paddingLeft = "1em";
theme.screen.components.quote.borderLeft = "1px solid white";
theme.screen.components.quote.color= "white";
theme.screen.components.cite.color= "white";
theme.screen.components.codePane.code.fontSize = "1.3rem";

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade"]} transitionDuration={0} controls={false}>
          <Slide notes="Današnja tema je Docker, po meni jedna od najbitnijih tehnologija koju bi, po mišljenju stručnjaka (mene), svatko trebao imati u svom arsenalu. To je tehnologija koja će vam promjeniti život, skuhat kavu, čuvat djecu i odraditi mamurluk umjesto vas. Pa da vidimo...">
            <Image src={images.docker} margin="0px auto 40px" height="20rem"/>
            <Heading fit caps lineHeight={1}>Docker za sve</Heading>
            <Text textColor="white">Zoran Regvart, CROZ</Text>
          </Slide>

          <Slide notes="U početku, i Đađa prekini me ako ti je ovo poznato, Zemlja je bila velika užarena kugla. Nešto kasnije: ENIAC. ENIAC je prvo elektroničko računalo opće namjene. Hraniš ga bušenim karticama, on ispljune bušene kartice. Jedan operater ovaj tip na slici, jedan program, jedan izlaz, stanje sustava poznato u svakom trenutku. <i>Full</i> korisno za jedan zadatak (izračune za nuklearke, time zatvaramo krug sa užarenom kuglom)." bgColor="black">
            <Heading caps>U početku...</Heading>
            <Layout>
              <Appear fid="1">
                <Fill>
                  <Image src={images.earth} height="20rem"/>
                </Fill>
              </Appear>
              <Appear fid="2">
                <Fill>
                    <Image src={images.eniac} height="20rem"/>
                    <Text textColor="white">ENIAC (U.S. Army Photo)</Text>
                </Fill>
              </Appear>
            </Layout>
          </Slide>

          <Slide notes="Ubrzo smo shvatili da ima nešto u tim računalima. Slijede kompleksnija računala, koja opslužuju više od jednog korisnika. Na slici je PDP-11/70, Mike Muuss poznat po implementaciji `ping`-a i Earl Weaver i famozni rotirajući vektorski tenk. Ken Thompson, Dennis Ritchie, Douglas McIlroy i Joe Ossanna su smislili Unix za (među ostalim i) PDP-11 (najslabije Unix računalo ikad). IBM radi svoju uspješnicu System/360, ako koštaš puno novaca i može te koristiti više korisnika onda se zoveš <i>mainframe</i>. IBM-eri su brzo shvatili da ako žele prodavati novi hardware da moraju biti kompatibilini sa prethodnom edicijom hardware-a. A ako žele prodavati novi hardware onda potencijalno moraju raditi promjene koje bi mogle ugroziti tu kompatibilnost. Što je dovelo do izuma Virtualne Mašine. Načina da se emulira stari hardware na novom hardware-u i tako očuva kompatibilnost." bgColor="#FFC872">
            <Heading size={3}>Lude '70ete</Heading>
            <Layout>
              <Fill>
                <Image src={images.pdp11} height="20rem"/>
                <Text>PDP-11/70 (U.S. Army Photo)</Text>
              </Fill>
              <Fill>
                <Image src={images.s360} height="20rem"/>
                <Text>IBM System/360</Text>
              </Fill>
            </Layout>
          </Slide>

          <Slide bgColor="white" notes="U potrazi za što boljim iskorištavanjem resursa, lakšom migracijom i konsolidacijom, VMWare je '98/99 na tržište plasirao svoj prvi hipervizor. Sa virtualnim mašinama imamo način da prenesemo program sa jednog računala na drugo. Imamo mogućnost boljeg iskorištavanja resursa pokretanjem više virtualnih mašina na jednom fizičkom računalu.">
            <Heading size={4} caps fit>Dijete mainframe-a: Virtualna Mašina</Heading>
            <Layout>
              <Appear fid="1">
                <Fill>
                  <Image src={images.app_os_hw} height="20rem" />
                  <Text>Računalo sa jednom aplikacijom</Text>
                </Fill>
              </Appear>
              <Appear fid="2">
                <Fill>
                  <Image src={images.app_os_vm_hw} height="20rem" />
                  <Text>Virtualna mašina sa jednom aplikacijom</Text>
                </Fill>
              </Appear>
              <Appear fid="3">
                <Fill>
                  <Image src={images.two_app_os_vm_hw} height="20rem" />
                  <Text>Računalo sa više virtualnih mašina (aplikacija)</Text>
                </Fill>
              </Appear>
            </Layout>
          </Slide>

          <Slide bgColor="white" notes="Ali, nema srebrnog metka, virtualne mašine imaju probleme. Prvi je veličina image-a i proces kreiranja virtualne mašine. Npr. sasvim je normalno da se izgubi 30ak min da se kreira virtualna mašina iz nule (npr. packer-om) i da rezultat ima par GB. Drugi problem je što sa svakom virtualnom mašinom dolazi još jedna kopija OS-a, želim zapravo pokrenuti aplikaciju, a ne stotine programa koji se po <i>default-u</i> isporučuju i pokreću uz OS, svakom OS-u moram dodijeliti određene resurse (npr. par GB RAM-a, neku količinu CPU jezgri), tih resursa imam ograničeno, a samo OS zahtjeva relativno veliku količinu istih. Treći problem je, a rješenje svi znamo jer princip je izmišljen još od kraja 18st. u francuskoj, je klikanje. Jednom kada se VM kreira prva stvar koju korisnici naprave je da klikću po njoj. Ne po aplikaciji, nego po instalaciji aplikacije, konfiguracije OS-a, prčkaju li ga prčkaju do trenutka kada ta VM je sve osim one od koje se počelo.">
            <Heading size={4} fit caps>Problemi sa Virtualnim Mašinama</Heading>
            <Layout>
              <Fill>
                <Image src={images.download} />
                <Text>Veličina image-a</Text>
                <Text textSize=".9em">(malo koja je ispod 1GB, većina 4+ GB)</Text>
              </Fill>
              <Fill>
                <Image src={images.os_os_n} height="200px"/>
                <Text>Redundantnost OS-a</Text>
                <Text textSize=".9em">(1 APP = 1 VM = 1 OS)</Text>
              </Fill>
              <Fill>
                <Image src={images.clicking} height="200px"/>
                <Text>Klikanje</Text>
                <Text textSize=".9em">(auuu što volite klikanje)</Text>
              </Fill>
            </Layout>
          </Slide>

          <Slide bgColor="white" notes="Daklem, VM su super imaju par izvrsnih odlika. Ali imaju i par minusa. Evo par plusića i par minusića.">
            <Heading textColor="black" caps>Virtualne Mašine</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps>Plusići</Heading>
                <List>
                  <ListItem>Izolacija</ListItem>
                  <ListItem>Portabilnost</ListItem>
                  <ListItem>Odabir OS-a</ListItem>
                  <ListItem>Management *</ListItem>
                  <ListItem>Živa migracija</ListItem>
                  <ListItem>Visoka dostupnost</ListItem>
                </List>
                <Text textSize=".8em">* QoS, template, orkestracija, raspodjela resurasa</Text>
              </Fill>
              <Fill>
                <Heading size={4} caps>Minusići</Heading>
                <List>
                  <ListItem>Svaka VM svijet za sebe</ListItem>
                  <ListItem>Velik overhead</ListItem>
                  <ListItem>Postanu &#10052; u sekundi</ListItem>
                  <ListItem>Automatizirni build? *</ListItem>
                  <ListItem>Što sve pokrećem za 1 APP</ListItem>
                </List>
                <Text textSize=".8em">* osim na Sentimenteru, a automatizacija traje</Text>
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Heading>&#10052;</Heading>
            <BlockQuote>
              <Quote textSize="1.5em">... some mix of command-line invocations, jumping between GUI screens, and editing text files. The result is a unique snowflake - good for a ski resort, bad for a data center.</Quote>
              <Cite>Martin Fowler *</Cite>
            </BlockQuote>
            <Text textSize=".8em" textColor="white">* http://martinfowler.com/bliki/SnowflakeServer.html</Text>
          </Slide>

          <Slide notes="Rekapitulacija">
            <Heading size={4} caps fit textColor="white">Rekapitulacija, što zapravo želimo?</Heading>
            <Text textColor="white">Pokrenuti aplikaciju <strong>neovisno</strong> o ostalim aplikacijama</Text>
            <Text textColor="white">Pokrenuti <strong>samo</strong> aplikaciju i ništa drugo</Text>
            <Text textColor="white">Osigurati <strong>ponovljivost</strong> (bez &#10052;!)</Text>
            <Text textColor="white"><strong>Iskoristiti</strong> raspoloživi hardware</Text>
            <Text textColor="white">Bilo bi <em>fora</em> da je <strong>brzo</strong></Text>
          </Slide>

          <Slide notes="Alternativa">
            <Heading size={4} fit caps textColor="white">Zanimljiva alternativa: Linux Container</Heading>
            <List>
              <ListItem textColor="white">Google tehnologija koja je od <strong>2007</strong> u Linux kernelu *</ListItem>
              <ListItem textColor="white">Inicijalno nazvana <em>process containers</em>, danas se zove <strong>cgroups</strong>**</ListItem>
              <ListItem textColor="white">Ograničava, prioretizira, broji korištenje i izolira kernel resurse (<strong>CPU</strong>, <strong>memorija</strong>, <strong>I/O</strong>, <strong>mreža</strong>)</ListItem>
              <ListItem textColor="white">Omogućava <em>Operating system level virtualization</em></ListItem>
              <ListItem textColor="white">Razne implementacije: LXC, lmctfy, OpenVZ, Linux-VServer</ListItem>
            </List>
            <Text textSize=".8em" textColor="white">* od <strong>2.6.24</strong></Text>
            <Text textSize=".8em" textColor="white">** skraćeno od <strong>control groups</strong></Text>
          </Slide>

          <Slide bgColor="white" notes="A kako cgroups radi, Resursi">
            <Heading size={4} caps fit>OK, ali kako cgroups radi? - Resursi</Heading>
            <Image src={images.hiw1} height="30rem" />
          </Slide>

          <Slide bgColor="white" notes="A kako cgroups radi?">
            <Heading size={4} caps fit>OK, ali kako cgroups radi? - Resursi</Heading>
            <Image src={images.hiw2} height="30rem" />
          </Slide>

          <Slide bgColor="white" notes="A kako cgroups radi?">
            <Heading size={4} caps fit>OK, ali kako cgroups radi? - Resursi</Heading>
            <Image src={images.hiw3} height="30rem" />
          </Slide>

          <Slide bgColor="white" notes="A kako cgroups radi?">
            <Heading size={4} caps fit>OK, ali kako cgroups radi? - Resursi</Heading>
            <Image src={images.hiw4} height="30rem" />
          </Slide>

          <Slide bgColor="white" notes="A kako cgroups radi?">
            <Heading size={4} caps fit>OK, ali kako cgroups radi? - Izolacija</Heading>
            <Image src={images.hiw5} height="30rem" />
          </Slide>

          <Slide bgColor="white" notes="A kako cgroups radi?">
            <Heading size={4} caps fit>OK, ali kako cgroups radi? - Izolacija</Heading>
            <Image src={images.hiw6} height="30rem" />
          </Slide>

          <Slide bgColor="white" notes="A kako cgroups radi?">
            <Heading size={4} caps fit>OK, ali kako cgroups radi? - Izolacija</Heading>
            <Image src={images.hiw7} height="30rem" />
          </Slide>

          <Slide bgColor="white" notes="Jel liči na virtualnu mašinu?">
            <Heading size={4} caps>Izvin'te jel vam ovo liči na virtualnu mašinu?</Heading>
          </Slide>

          <Slide bgColor="white" notes="Virtualna mašina - container">
            <Layout>
              <Fill>
                <Heading size={4} caps>VM</Heading>
                <Image src={images.two_app_os_vm_hw} height="20rem" />
                <Image src={images.two_app_os_vm_hw} height="20rem" />
              </Fill>
              <Fill>
                <Heading size={4} caps>cgroups</Heading>
                <Image src={images.cgroups} height="20rem" />
                <Image src={images.cgroups} height="20rem" />
              </Fill>
            </Layout>
          </Slide>

          <Slide notes="Pa dobro zašto je Docker onda bolje rješenje? Ajmo prvo vidjeti što je to Docker.">
            <Heading size={4} caps textColor="white">A što je Docker?</Heading>
            <List>
              <ListItem textColor="white">Linux* 64bit tehnologija koja koristi <em>cgroups</em></ListItem>
              <ListItem textColor="white">1 executable koji je i server (samo Linux) i client (Linux, Windows, MacOS)</ListItem>
              <ListItem textColor="white">Ista alatka za pokretanje/gašenje/build-anje/dohvaćanje <em>image-a</em></ListItem>
            </List>
            <Text textSize=".8em" textColor="white">* postoji podrška u SmartOS (OpenIndiana, Solaris), Microsoft Windows Server 2016 TP4 ?!</Text>
          </Slide>

          <Slide notes="">
            <Heading size={4} caps textColor="white">A zašto je Docker poseban?</Heading>
            <Text textColor="white">Docker definira standardan format Linux container-a</Text>
            <Text textColor="white">(<strong>Docker image</strong>)</Text>
          </Slide>

          <Slide notes="Docker image-i su sastavljeni od slojeva (layers). Samo zadnji <strong>layer</strong> je moguće mijenjati. Inkrementalna promjena aplikacije je inkrementalna promjena (samo zadnjeg layer-a)">
            <Heading size={4} caps textColor="white">A zašto je Docker poseban?</Heading>
            <Text textColor="white">Docker promovira <em>immutability</em></Text>
            <Text textColor="white">(<strong>image layers</strong>)</Text>
          </Slide>

          <Slide notes="">
            <Heading size={4} caps textColor="white">A zašto je Docker poseban?</Heading>
            <Text textColor="white">Docker ekosistem uključuje zbirno mjesto za Docker image-e</Text>
            <Text textColor="white">(<strong>Docker Registry</strong>)</Text>
          </Slide>

          <Slide notes="">
            <Heading size={4} caps textColor="white">A zašto je Docker poseban?</Heading>
            <Text textColor="white">Docker je jednostavan!</Text>
            <Text textColor="white">(izvrstan <strong>tooling</strong> i <strong>fenomenalan UX</strong>)</Text>
          </Slide>

          <Slide notes="">
            <Heading size={4} caps textColor="white">A zašto je Docker poseban?</Heading>
            <Text textColor="white">Docker je brz!</Text>
            <Text textColor="white">(build <em>image-a</em>, pokretanje <em>container-a</em> = <em>tipično</em> <strong>par sekundi</strong>)</Text>
          </Slide>

          <Slide notes="Zamislite da gorivo za automobile nije standardno, a sad zamislite da su isporuke programa standardne i da aplikacije ">
            <Heading size={4} caps fit textColor="white">A šta je tu toliko revolucionarno?</Heading>
            <Text textColor="white">Docker nas vodi korak do <em>commoditization-a</em>* računarstva</Text>
            <Text textSize=".8em" textColor="white" margin="20px">* Učiniti nešto široko dostupnim proizvodom = rezultat standardizacije koji omogućava bolju eksploataciju produkta</Text>
          </Slide>

          <Slide notes="Kako izgleda docker">
            <Heading size={4} caps textColor="white">A ima li Docker arhitekturu?</Heading>
            <Image src={images.docker_architecture} height="20rem" />
            <Text textSize=".8em" textColor="white">* HTTP REST, Unix domain socket (IPC), file descriptor</Text>
          </Slide>

          <Slide>
            <Heading size={4} caps fit textColor="white">A kako da započnem sa Docker-om?</Heading>
            <Text textColor="white">Teško da može biti jednostavnije</Text>
            <Text textColor="white">(<strong>Docker Toolbox</strong>)</Text>
          </Slide>

          <Slide>
            <Heading size={4} caps fit textColor="white">A daj mi malo objasni Docker osnovne pojmove</Heading>
            <Text textColor="white">aplikacije se izvode u <strong>container</strong>-ima</Text>
            <Text textColor="white">aplikacije se distribuiraju u <strong>image</strong>-ima</Text>
            <Text textColor="white"><strong>build</strong> <strong>image</strong>-a je definiran u text datoteci: <strong>Dockerfile</strong></Text>
          </Slide>

          <Slide>
            <Heading size={4} caps fit textColor="white">Ne, stvarno, kako da započnem?</Heading>
            <Text textColor="white">Kuharica:</Text>
            <CodePane lang="bash" source="docker run -d -p 8080:8080 --name app tomcat:8-jre8 # pokreni container" />
            <CodePane lang="bash" source="docker ps # koji container-i su pokrenuti?" />
            <CodePane lang="bash" source="docker logs app # standardni output container-a" />
            <CodePane lang="bash" source="docker stop app # zaustavi container" />
            <CodePane lang="bash" source="docker rm app # obriši ostatke container-a" />
            <CodePane lang="bash" source="docker images # koje image-e imam download-ane" />
            <CodePane lang="bash" source="docker rmi tomcat:8-jre8 # obriši image" />
          </Slide>

          <Slide>
            <Heading size={4} caps fit textColor="white">Ne, stvarno, kako da započnem, ali na projektu?</Heading>
            <Text textColor="white">Dockerfile</Text>
            <CodePane lang="docker" source={require("raw!../petclinic/Dockerfile")} />
            <Text textColor="white">Build</Text>
            <CodePane lang="bash" source="docker build -t petclinic ." />
          </Slide>

          <Slide notes="Hands on">
            <Heading size={4} caps fit textColor="white">A ima li ova prezentacija <em>hands-on</em> dio?</Heading>
          </Slide>

          <Slide>
            <Heading size={4} caps fit textColor="white">A što nam nisi rekao?</Heading>
            <List>
              <ListItem textColor="white">veze između container-a (<strong>link</strong>)</ListItem>
              <ListItem textColor="white">šta se radi sa bazama (<em>perzistencija</em>)</ListItem>
              <ListItem textColor="white">širi ekosistem (<strong>kubernetes</strong>, <strong>coreOS</strong>, <strong>openshift</strong>, <strong>fabric8</strong>)</ListItem>
              <ListItem textColor="white">tooling: n Java Docker API-a, n Maven docker plugin-a</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading fit caps>Pitanja?</Heading>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
