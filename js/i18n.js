// Language switch (English, Nederlands, Français).
// Elements carry data-i18n="key" (inner HTML) or data-i18n-aria="key" (aria-label).
// Long legal text on the terms page is marked up per language with data-lang-block.
(() => {
    const T = {
        en: {
            'meta.home': 'VanEngelandt.NET | Lighting, Laser & Video Design for Live Events',
            'meta.terms': 'General Terms of Rental and Sale | VanEngelandt.NET',
            'nav.services': 'Services',
            'nav.approach': 'Approach',
            'nav.about': 'About',
            'nav.terms': 'Terms of Sale',
            'nav.contact': 'Contact',
            'nav.quote': 'Request a quote',
            'nav.menu': 'Open menu',
            'nav.lang': 'Choose language',

            'hero.eyebrow': 'Lighting &middot; Laser &middot; Video &middot; Previsualisation',
            'hero.title': 'Light that <em>defines</em> the moment.',
            'hero.lead': 'Independent lighting designer and show technician based in Wevelgem, Belgium. I design, visualise and operate lighting, laser and video for events, productions and organisations that expect nothing less than flawless.',
            'hero.cta': 'Discuss your project',
            'hero.cta2': 'Explore services',
            'hero.scroll': 'Scroll',

            'services.eyebrow': 'Services',
            'services.title': 'Expertise from first concept to final cue',
            'services.intro': 'A single point of contact for every visual element of your event, delivered with the precision of a touring production.',
            's1.title': 'Lighting Design &amp; Previsualisation',
            's1.text': 'Bespoke lighting concepts that translate your vision into atmosphere, fully visualised in advance, including photorealistic real-time previz in Unreal Engine&nbsp;5.',
            's2.title': 'Show Programming &amp; Operation',
            's2.text': 'Meticulous programming and confident live operation on grandMA3 and ChamSys, so every cue lands exactly when it should.',
            's3.title': 'Laser Design',
            's3.text': 'Striking, audience-safe laser content created in Pangolin Beyond Ultimate, integrated seamlessly with light and video.',
            's4.title': 'Video &amp; Media Servers',
            's4.text': 'Dynamic visual content and live playback with Resolume Arena, synchronised with the rest of your show.',
            's5.title': 'Technical Production Support',
            's5.text': 'Installation, configuration and troubleshooting on site, plus clear technical coordination with venues, suppliers and crew.',
            's6.title': 'Equipment Consultancy &amp; Rental',
            's6.text': 'Independent advice on the right fixtures and systems for your budget, with rental coordination handled for you.',

            'approach.eyebrow': 'Approach',
            'approach.title': 'A process built for certainty',
            'a1.title': 'Consultation',
            'a1.text': 'We define your goals, audience, venue and budget, and agree on a clear scope.',
            'a2.title': 'Design &amp; Previz',
            'a2.text': 'The concept is drawn in Vectorworks and brought to life in Capture or Unreal Engine&nbsp;5 with Yunsio SuperStage, so you can walk through the show before a single fixture is rigged.',
            'a3.title': 'Programming',
            'a3.text': 'Cues, timing and effects are prepared offline, which keeps on-site time efficient and predictable.',
            'a4.title': 'Show Day',
            'a4.text': 'Calm, precise operation from line check to final bow, with contingency plans ready.',

            'about.eyebrow': 'About',
            'about.title': 'Peter Van Engelandt',
            'about.p1': 'I am an independent lighting, laser and video specialist based in Wevelgem, Belgium, working with event agencies, venues, production companies and organisations throughout Belgium and beyond.',
            'about.p2': 'My workflow is built on industry-standard tools: <strong>grandMA3</strong> and <strong>ChamSys MQ500M+</strong> consoles for control, <strong>Pangolin Beyond Ultimate</strong> for laser, <strong>Resolume Arena</strong> for video, and <strong>Vectorworks</strong>, <strong>Capture</strong> and <strong>Unreal Engine&nbsp;5</strong> with <strong>Yunsio SuperStage</strong> for design and previsualisation.',
            'about.p3': 'Every project starts with listening. By understanding the purpose of your event, I create visual experiences that elevate the atmosphere, put the spotlight where it belongs and run with complete technical reliability.',
            'tool.lighting': 'Lighting',
            'tool.laser': 'Laser',
            'tool.video': 'Video',
            'tool.design': 'Design',
            'tool.previz': 'Previz',

            'cta.title': 'Let us create something <em>unforgettable</em>.',
            'cta.text': 'Share your plans and receive a tailored proposal, without obligation.',
            'cta.button': 'Request a quote',

            'contact.eyebrow': 'Contact',
            'contact.title': 'Get in touch',
            'contact.card1': 'Contact details',
            'contact.card2': 'Company details',
            'label.email': 'Email',
            'label.website': 'Website',
            'label.facebook': 'Facebook',
            'label.address': 'Address',
            'label.vat': 'VAT number',
            'label.bank': 'Bank',
            'label.iban': 'IBAN',
            'label.terms': 'Terms',
            'label.company': 'Company',
            'label.owner': 'Managing director',
            'contact.terms': 'General Terms of Rental and Sale',

            'footer.rights': 'All rights reserved.',
            'footer.top': 'Back to top',

            'terms.eyebrow': 'Legal',
            'terms.title': 'General Terms of <em>Rental and Sale</em>',
            'terms.toc': 'Contents',
            'terms.back': 'Back to website',
            'terms.backShort': 'Back',
            'terms.notice': 'This translation is provided for convenience. In the event of any discrepancy, the Dutch version shall prevail.',
        },

        nl: {
            'meta.home': 'VanEngelandt.NET | Licht-, laser- en videodesign voor live evenementen',
            'meta.terms': 'Algemene verhuur- en verkoopvoorwaarden | VanEngelandt.NET',
            'nav.services': 'Diensten',
            'nav.approach': 'Werkwijze',
            'nav.about': 'Over mij',
            'nav.terms': 'Verkoopvoorwaarden',
            'nav.contact': 'Contact',
            'nav.quote': 'Offerte aanvragen',
            'nav.menu': 'Menu openen',
            'nav.lang': 'Kies taal',

            'hero.eyebrow': 'Licht &middot; Laser &middot; Video &middot; Previsualisatie',
            'hero.title': 'Licht dat het moment <em>bepaalt</em>.',
            'hero.lead': 'Zelfstandig lichtontwerper en showtechnicus uit Wevelgem. Ik ontwerp, visualiseer en bedien licht, laser en video voor evenementen, producties en organisaties die niets minder dan perfectie verwachten.',
            'hero.cta': 'Bespreek uw project',
            'hero.cta2': 'Ontdek de diensten',
            'hero.scroll': 'Scroll',

            'services.eyebrow': 'Diensten',
            'services.title': 'Expertise van eerste concept tot laatste cue',
            'services.intro': 'Eén aanspreekpunt voor elk visueel onderdeel van uw evenement, uitgevoerd met de precisie van een tourproductie.',
            's1.title': 'Lichtontwerp &amp; previsualisatie',
            's1.text': 'Lichtconcepten op maat die uw visie vertalen naar sfeer, volledig vooraf gevisualiseerd, inclusief fotorealistische real-time previz in Unreal Engine&nbsp;5.',
            's2.title': 'Showprogrammatie &amp; bediening',
            's2.text': 'Nauwkeurige programmatie en zelfverzekerde live bediening op grandMA3 en ChamSys, zodat elke cue precies op het juiste moment valt.',
            's3.title': 'Laserontwerp',
            's3.text': 'Indrukwekkende, publieksveilige lasershows gemaakt in Pangolin Beyond Ultimate, naadloos geïntegreerd met licht en video.',
            's4.title': 'Video &amp; mediaservers',
            's4.text': 'Dynamische visuele content en live playback met Resolume Arena, perfect gesynchroniseerd met de rest van uw show.',
            's5.title': 'Technische productieondersteuning',
            's5.text': 'Installatie, configuratie en troubleshooting ter plaatse, met heldere technische coördinatie met locaties, leveranciers en crew.',
            's6.title': 'Materiaaladvies &amp; verhuur',
            's6.text': 'Onafhankelijk advies over de juiste toestellen en systemen voor uw budget, met volledige coördinatie van de verhuur.',

            'approach.eyebrow': 'Werkwijze',
            'approach.title': 'Een aanpak die zekerheid biedt',
            'a1.title': 'Kennismaking',
            'a1.text': 'We bepalen samen uw doelen, publiek, locatie en budget, en leggen een duidelijke scope vast.',
            'a2.title': 'Ontwerp &amp; previz',
            'a2.text': 'Het concept wordt uitgetekend in Vectorworks en tot leven gebracht in Capture of Unreal Engine&nbsp;5 met Yunsio SuperStage, zodat u de show kunt beleven nog voor er één toestel hangt.',
            'a3.title': 'Programmatie',
            'a3.text': 'Cues, timing en effecten worden vooraf offline voorbereid, wat de tijd op locatie efficiënt en voorspelbaar houdt.',
            'a4.title': 'Showdag',
            'a4.text': 'Rustige, precieze bediening van line check tot slotapplaus, met noodscenario’s klaar.',

            'about.eyebrow': 'Over mij',
            'about.title': 'Peter Van Engelandt',
            'about.p1': 'Ik ben een zelfstandig specialist in licht, laser en video, gevestigd in Wevelgem. Ik werk voor eventbureaus, locaties, productiehuizen en organisaties in heel België en daarbuiten.',
            'about.p2': 'Mijn werkwijze steunt op de standaardtools uit de sector: <strong>grandMA3</strong>- en <strong>ChamSys MQ500M+</strong>-consoles voor de sturing, <strong>Pangolin Beyond Ultimate</strong> voor laser, <strong>Resolume Arena</strong> voor video, en <strong>Vectorworks</strong>, <strong>Capture</strong> en <strong>Unreal Engine&nbsp;5</strong> met <strong>Yunsio SuperStage</strong> voor ontwerp en previsualisatie.',
            'about.p3': 'Elk project begint met luisteren. Door het doel van uw evenement te begrijpen, creëer ik visuele belevingen die de sfeer versterken, de aandacht leggen waar ze hoort en technisch volledig betrouwbaar verlopen.',
            'tool.lighting': 'Licht',
            'tool.laser': 'Laser',
            'tool.video': 'Video',
            'tool.design': 'Ontwerp',
            'tool.previz': 'Previz',

            'cta.title': 'Laten we samen iets <em>onvergetelijks</em> creëren.',
            'cta.text': 'Deel uw plannen en ontvang vrijblijvend een voorstel op maat.',
            'cta.button': 'Offerte aanvragen',

            'contact.eyebrow': 'Contact',
            'contact.title': 'Neem contact op',
            'contact.card1': 'Contactgegevens',
            'contact.card2': 'Bedrijfsgegevens',
            'label.email': 'E-mail',
            'label.website': 'Website',
            'label.facebook': 'Facebook',
            'label.address': 'Adres',
            'label.vat': 'Btw-nummer',
            'label.bank': 'Bank',
            'label.iban': 'IBAN',
            'label.terms': 'Voorwaarden',
            'label.company': 'Bedrijf',
            'label.owner': 'Zaakvoerder',
            'contact.terms': 'Algemene verhuur- en verkoopvoorwaarden',

            'footer.rights': 'Alle rechten voorbehouden.',
            'footer.top': 'Naar boven',

            'terms.eyebrow': 'Juridisch',
            'terms.title': 'Algemene verhuur- en <em>verkoopvoorwaarden</em>',
            'terms.toc': 'Inhoudsopgave',
            'terms.back': 'Terug naar de website',
            'terms.backShort': 'Terug',
            'terms.notice': '',
        },

        fr: {
            'meta.home': 'VanEngelandt.NET | Conception lumière, laser et vidéo pour événements live',
            'meta.terms': 'Conditions générales de location et de vente | VanEngelandt.NET',
            'nav.services': 'Services',
            'nav.approach': 'Méthode',
            'nav.about': 'À propos',
            'nav.terms': 'Conditions de vente',
            'nav.contact': 'Contact',
            'nav.quote': 'Demander un devis',
            'nav.menu': 'Ouvrir le menu',
            'nav.lang': 'Choisir la langue',

            'hero.eyebrow': 'Lumière &middot; Laser &middot; Vidéo &middot; Prévisualisation',
            'hero.title': 'La lumière qui <em>sublime</em> l’instant.',
            'hero.lead': 'Concepteur lumière et technicien de spectacle indépendant basé à Wevelgem, en Belgique. Je conçois, visualise et pilote la lumière, le laser et la vidéo pour des événements, productions et organisations qui exigent l’excellence.',
            'hero.cta': 'Parlons de votre projet',
            'hero.cta2': 'Découvrir les services',
            'hero.scroll': 'Défiler',

            'services.eyebrow': 'Services',
            'services.title': 'Une expertise du premier concept au dernier top',
            'services.intro': 'Un interlocuteur unique pour chaque élément visuel de votre événement, avec la rigueur d’une production en tournée.',
            's1.title': 'Conception lumière &amp; prévisualisation',
            's1.text': 'Des concepts lumière sur mesure qui traduisent votre vision en atmosphère, entièrement visualisés en amont, y compris en prévisualisation photoréaliste en temps réel sous Unreal Engine&nbsp;5.',
            's2.title': 'Programmation &amp; pupitrage',
            's2.text': 'Une programmation minutieuse et un pupitrage live maîtrisé sur grandMA3 et ChamSys, pour que chaque effet tombe exactement au bon moment.',
            's3.title': 'Conception laser',
            's3.text': 'Des shows laser saisissants et sûrs pour le public, créés avec Pangolin Beyond Ultimate et parfaitement intégrés à la lumière et à la vidéo.',
            's4.title': 'Vidéo &amp; serveurs média',
            's4.text': 'Des contenus visuels dynamiques et une diffusion live avec Resolume Arena, synchronisés avec l’ensemble de votre spectacle.',
            's5.title': 'Support technique de production',
            's5.text': 'Installation, configuration et dépannage sur site, ainsi qu’une coordination technique claire avec les lieux, fournisseurs et équipes.',
            's6.title': 'Conseil &amp; location de matériel',
            's6.text': 'Des conseils indépendants sur les projecteurs et systèmes adaptés à votre budget, avec la coordination complète de la location.',

            'approach.eyebrow': 'Méthode',
            'approach.title': 'Une méthode qui apporte la sérénité',
            'a1.title': 'Consultation',
            'a1.text': 'Nous définissons ensemble vos objectifs, votre public, le lieu et le budget, et fixons un périmètre clair.',
            'a2.title': 'Conception &amp; prévisualisation',
            'a2.text': 'Le concept est dessiné dans Vectorworks puis mis en scène dans Capture ou Unreal Engine&nbsp;5 avec Yunsio SuperStage, pour découvrir le spectacle avant même l’accroche du premier projecteur.',
            'a3.title': 'Programmation',
            'a3.text': 'Les effets, conduites et timings sont préparés hors ligne, pour un temps sur site efficace et maîtrisé.',
            'a4.title': 'Le jour du spectacle',
            'a4.text': 'Un pupitrage calme et précis, des derniers réglages au salut final, avec des plans de secours prêts.',

            'about.eyebrow': 'À propos',
            'about.title': 'Peter Van Engelandt',
            'about.p1': 'Spécialiste indépendant de la lumière, du laser et de la vidéo basé à Wevelgem, je travaille pour des agences événementielles, des lieux, des sociétés de production et des organisations dans toute la Belgique et au-delà.',
            'about.p2': 'Mon travail s’appuie sur les outils de référence du secteur : les consoles <strong>grandMA3</strong> et <strong>ChamSys MQ500M+</strong> pour le pilotage, <strong>Pangolin Beyond Ultimate</strong> pour le laser, <strong>Resolume Arena</strong> pour la vidéo, ainsi que <strong>Vectorworks</strong>, <strong>Capture</strong> et <strong>Unreal Engine&nbsp;5</strong> avec <strong>Yunsio SuperStage</strong> pour la conception et la prévisualisation.',
            'about.p3': 'Chaque projet commence par l’écoute. En comprenant la finalité de votre événement, je crée des expériences visuelles qui subliment l’atmosphère, placent la lumière là où elle doit être et se déroulent avec une fiabilité technique totale.',
            'tool.lighting': 'Lumière',
            'tool.laser': 'Laser',
            'tool.video': 'Vidéo',
            'tool.design': 'Conception',
            'tool.previz': 'Prévisu',

            'cta.title': 'Créons ensemble un moment <em>inoubliable</em>.',
            'cta.text': 'Présentez-moi votre projet et recevez une proposition sur mesure, sans engagement.',
            'cta.button': 'Demander un devis',

            'contact.eyebrow': 'Contact',
            'contact.title': 'Prenons contact',
            'contact.card1': 'Coordonnées',
            'contact.card2': 'Informations légales',
            'label.email': 'E-mail',
            'label.website': 'Site web',
            'label.facebook': 'Facebook',
            'label.address': 'Adresse',
            'label.vat': 'Numéro de TVA',
            'label.bank': 'Banque',
            'label.iban': 'IBAN',
            'label.terms': 'Conditions',
            'label.company': 'Société',
            'label.owner': 'Gérant',
            'contact.terms': 'Conditions générales de location et de vente',

            'footer.rights': 'Tous droits réservés.',
            'footer.top': 'Haut de page',

            'terms.eyebrow': 'Mentions légales',
            'terms.title': 'Conditions générales de <em>location et de vente</em>',
            'terms.toc': 'Sommaire',
            'terms.back': 'Retour au site',
            'terms.backShort': 'Retour',
            'terms.notice': 'Cette traduction est fournie à titre informatif. En cas de divergence, la version néerlandaise prévaut.',
        },
    };

    const LANGS = ['en', 'nl', 'fr'];
    const store = {
        get() { try { return localStorage.getItem('lang'); } catch (e) { return null; } },
        set(v) { try { localStorage.setItem('lang', v); } catch (e) { /* private mode */ } },
    };

    function initialLang() {
        const q = new URLSearchParams(location.search).get('lang');
        if (LANGS.includes(q)) return q;
        const saved = store.get();
        if (LANGS.includes(saved)) return saved;
        const nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
        return LANGS.includes(nav) ? nav : 'en';
    }

    function apply(lang) {
        const d = T[lang] || T.en;
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const v = d[el.dataset.i18n];
            if (v !== undefined) el.innerHTML = v;
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const v = d[el.dataset.i18nAria];
            if (v !== undefined) el.setAttribute('aria-label', v);
        });
        const page = document.documentElement.dataset.page;
        if (page && d['meta.' + page]) document.title = d['meta.' + page];
        document.querySelectorAll('[data-lang-block]').forEach(el => { el.hidden = el.dataset.langBlock !== lang; });
        document.querySelectorAll('[data-set-lang]').forEach(b => {
            const on = b.dataset.setLang === lang;
            b.classList.toggle('active', on);
            b.setAttribute('aria-pressed', on);
        });
        document.querySelectorAll('.notice-text').forEach(el => { el.closest('.notice').hidden = !el.textContent.trim(); });
        document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
    }

    document.querySelectorAll('[data-set-lang]').forEach(b => b.addEventListener('click', () => {
        store.set(b.dataset.setLang);
        apply(b.dataset.setLang);
    }));
    apply(initialLang());
})();
