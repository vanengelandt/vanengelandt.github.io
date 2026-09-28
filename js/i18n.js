// Language switch (English, Nederlands, Français, 中文, ไทย, Tiếng Việt).
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
        zh: {
            'meta.home': 'VanEngelandt.NET | 现场活动灯光、激光与视频设计',
            'meta.terms': '租赁与销售通用条款 | VanEngelandt.NET',

            'nav.services': '服务',
            'nav.approach': '工作方式',
            'nav.about': '关于',
            'nav.terms': '销售条款',
            'nav.contact': '联系',
            'nav.quote': '获取报价',
            'nav.menu': '打开菜单',
            'nav.lang': '选择语言',

            'hero.eyebrow': '灯光 &middot; 激光 &middot; 视频 &middot; 预可视化',
            'hero.title': '以光<em>定义</em>每一刻。',
            'hero.lead': '独立灯光设计师与演出技术师，常驻比利时 Wevelgem。我为追求完美呈现的活动、演出制作与机构，提供灯光、激光与视频的设计、可视化及现场执行。',
            'hero.cta': '洽谈您的项目',
            'hero.cta2': '了解服务',
            'hero.scroll': '向下滚动',

            'services.eyebrow': '服务',
            'services.title': '从最初构想到最后一个 Cue，全程专业把控',
            'services.intro': '活动中所有视觉元素，由一位专人统筹负责，并以巡演级制作的精准度交付。',
            's1.title': '灯光设计 &amp; 预可视化',
            's1.text': '量身定制的灯光方案，将您的构想转化为动人氛围；所有效果均提前完整预演，包括基于 Unreal Engine&nbsp;5 的照片级实时预演（Previz）。',
            's2.title': '灯光编程 &amp; 现场执行',
            's2.text': '在 grandMA3 与 ChamSys 控台上精细编程、沉稳操控，确保每一个 Cue 都分秒不差。',
            's3.title': '激光设计',
            's3.text': '使用 Pangolin Beyond Ultimate 打造震撼且符合观众安全标准的激光内容，与灯光和视频无缝融合。',
            's4.title': '视频 &amp; 媒体服务器',
            's4.text': '借助 Resolume Arena 呈现动态视觉内容与实时播放，并与整场演出精准同步。',
            's5.title': '技术制作支持',
            's5.text': '现场安装、调试与故障排除，并与场馆、供应商及工作团队进行清晰高效的技术协调。',
            's6.title': '设备咨询 &amp; 租赁',
            's6.text': '根据您的预算，独立推荐最合适的灯具与系统，并为您全程协调设备租赁。',

            'approach.eyebrow': '工作方式',
            'approach.title': '每一步，都为万无一失',
            'a1.title': '需求沟通',
            'a1.text': '共同明确您的目标、受众、场地与预算，并确定清晰的工作范围。',
            'a2.title': '设计 &amp; 预演',
            'a2.text': '在 Vectorworks 中完成方案绘制，再通过 Capture 或搭配 Yunsio SuperStage 的 Unreal Engine&nbsp;5 生动呈现——在第一台灯具吊装之前，您即可身临其境地预览整场演出。',
            'a3.title': '编程',
            'a3.text': 'Cue、时间线与效果均提前离线编程，让现场工作高效可控。',
            'a4.title': '演出当日',
            'a4.text': '从信号检查到最后谢幕，沉着精准地执行，并备有完善的应急预案。',
            'about.eyebrow': '关于',
            'about.title': 'Peter Van Engelandt',
            'about.p1': '我是一名常驻比利时 Wevelgem 的独立灯光、激光与视频专家，服务于比利时及其他国家和地区的活动策划公司、演出场馆、制作公司与各类机构。',
            'about.p2': '我的工作流程建立在行业标准工具之上：控制方面使用 <strong>grandMA3</strong> 与 <strong>ChamSys MQ500M+</strong> 控台，激光使用 <strong>Pangolin Beyond Ultimate</strong>，视频使用 <strong>Resolume Arena</strong>，设计与预可视化则使用 <strong>Vectorworks</strong>、<strong>Capture</strong> 以及搭配 <strong>Yunsio SuperStage</strong> 的 <strong>Unreal Engine&nbsp;5</strong>。',
            'about.p3': '每个项目都从倾听开始。深入理解您活动的初衷，我才能打造出提升氛围的视觉体验，让聚光灯落在最该落的地方，并以万无一失的技术可靠性稳定运行。',

            'tool.lighting': '灯光',
            'tool.laser': '激光',
            'tool.video': '视频',
            'tool.design': '设计',
            'tool.previz': '预演',

            'cta.title': '携手打造<em>难忘</em>时刻。',
            'cta.text': '告诉我您的计划，即可免费获取量身定制的方案，无任何义务。',
            'cta.button': '获取报价',
            'contact.eyebrow': '联系',
            'contact.title': '联系我',
            'contact.card1': '联系方式',
            'contact.card2': '公司信息',

            'label.email': '电子邮箱',
            'label.website': '网站',
            'label.facebook': 'Facebook',
            'label.address': '地址',
            'label.vat': '增值税号',
            'label.bank': '银行',
            'label.iban': 'IBAN',
            'label.terms': '条款',
            'label.company': '公司',
            'label.owner': '总经理',

            'contact.terms': '租赁与销售通用条款',

            'footer.rights': '保留所有权利。',
            'footer.top': '返回顶部',

            'terms.eyebrow': '法律信息',
            'terms.title': '<em>租赁与销售</em>通用条款',
            'terms.toc': '目录',
            'terms.back': '返回网站',
            'terms.backShort': '返回',
            'terms.notice': '本译文仅为方便阅读而提供。如本译文与荷兰语版本存在任何不一致，以荷兰语版本为准。',
        },
        vi: {
            'meta.home': 'VanEngelandt.NET | Thiết kế ánh sáng, laser và video cho sự kiện trực tiếp',
            'meta.terms': 'Điều khoản chung về cho thuê và mua bán | VanEngelandt.NET',

            'nav.services': 'Dịch vụ',
            'nav.approach': 'Quy trình',
            'nav.about': 'Giới thiệu',
            'nav.terms': 'Điều khoản',
            'nav.contact': 'Liên hệ',
            'nav.quote': 'Nhận báo giá',
            'nav.menu': 'Mở menu',
            'nav.lang': 'Chọn ngôn ngữ',

            'hero.eyebrow': 'Ánh sáng &middot; Laser &middot; Video &middot; Previz 3D',
            'hero.title': 'Ánh sáng <em>định hình</em> khoảnh khắc.',
            'hero.lead': 'Nhà thiết kế ánh sáng và kỹ thuật viên show độc lập tại Wevelgem, Bỉ. Tôi thiết kế, dựng mô phỏng và vận hành ánh sáng, laser và video cho những sự kiện, chương trình và tổ chức chỉ chấp nhận sự hoàn hảo.',
            'hero.cta': 'Trao đổi về dự án',
            'hero.cta2': 'Khám phá dịch vụ',
            'hero.scroll': 'Cuộn',

            'services.eyebrow': 'Dịch vụ',
            'services.title': 'Chuyên môn từ ý tưởng đầu tiên đến cue cuối cùng',
            'services.intro': 'Một đầu mối duy nhất cho mọi yếu tố thị giác của sự kiện, được triển khai với độ chính xác của một tour diễn chuyên nghiệp.',
            's1.title': 'Thiết kế ánh sáng &amp; Previz',
            's1.text': 'Concept ánh sáng được may đo, biến ý tưởng của bạn thành bầu không khí sự kiện và được mô phỏng trọn vẹn từ trước, bao gồm previz thời gian thực chân thực như ảnh chụp trên Unreal Engine&nbsp;5.',
            's2.title': 'Lập trình &amp; Vận hành show',
            's2.text': 'Lập trình tỉ mỉ và vận hành trực tiếp vững vàng trên grandMA3 và ChamSys, để mọi cue vào đúng từng khoảnh khắc.',
            's3.title': 'Thiết kế laser',
            's3.text': 'Nội dung laser ấn tượng, an toàn cho khán giả, được xây dựng trên Pangolin Beyond Ultimate và hòa quyện liền mạch với ánh sáng và video.',
            's4.title': 'Video &amp; Media Server',
            's4.text': 'Nội dung hình ảnh sống động và playback trực tiếp với Resolume Arena, đồng bộ hoàn hảo với toàn bộ show.',
            's5.title': 'Hỗ trợ kỹ thuật sản xuất',
            's5.text': 'Lắp đặt, cấu hình và xử lý sự cố tại hiện trường, cùng công tác điều phối kỹ thuật rõ ràng với địa điểm, nhà cung cấp và ê-kíp.',
            's6.title': 'Tư vấn &amp; Cho thuê thiết bị',
            's6.text': 'Tư vấn độc lập về đèn và hệ thống phù hợp với ngân sách của bạn, kèm theo việc điều phối thuê thiết bị được lo trọn gói.',

            'approach.eyebrow': 'Quy trình',
            'approach.title': 'Quy trình vững chắc cho sự an tâm tuyệt đối',
            'a1.title': 'Tư vấn',
            'a1.text': 'Chúng ta cùng xác định mục tiêu, khán giả, địa điểm và ngân sách, rồi thống nhất một phạm vi công việc rõ ràng.',
            'a2.title': 'Thiết kế &amp; Previz',
            'a2.text': 'Concept được dựng bản vẽ trên Vectorworks và hiện thực hóa trong Capture hoặc Unreal Engine&nbsp;5 với Yunsio SuperStage, để bạn có thể trải nghiệm toàn bộ show trước khi treo bất kỳ thiết bị nào.',
            'a3.title': 'Lập trình',
            'a3.text': 'Cue, timing và hiệu ứng được chuẩn bị offline từ trước, giúp thời gian tại hiện trường luôn hiệu quả và chủ động.',
            'a4.title': 'Ngày diễn',
            'a4.text': 'Vận hành điềm tĩnh, chính xác từ khâu line check đến màn chào kết, luôn sẵn sàng phương án dự phòng.',
            'about.eyebrow': 'Giới thiệu',
            'about.title': 'Peter Van Engelandt',
            'about.p1': 'Tôi là chuyên gia ánh sáng, laser và video độc lập tại Wevelgem, Bỉ, đồng hành cùng các agency sự kiện, địa điểm tổ chức, công ty sản xuất và doanh nghiệp trên khắp nước Bỉ và quốc tế.',
            'about.p2': 'Quy trình làm việc của tôi dựa trên các công cụ chuẩn ngành: bàn điều khiển <strong>grandMA3</strong> và <strong>ChamSys MQ500M+</strong> để điều khiển, <strong>Pangolin Beyond Ultimate</strong> cho laser, <strong>Resolume Arena</strong> cho video, cùng <strong>Vectorworks</strong>, <strong>Capture</strong> và <strong>Unreal Engine&nbsp;5</strong> với <strong>Yunsio SuperStage</strong> cho thiết kế và previz.',
            'about.p3': 'Mọi dự án đều bắt đầu từ việc lắng nghe. Khi thấu hiểu mục đích sự kiện của bạn, tôi tạo nên những trải nghiệm thị giác nâng tầm bầu không khí, đưa điểm nhấn đến đúng nơi cần có và vận hành với độ tin cậy kỹ thuật tuyệt đối.',

            'tool.lighting': 'Ánh sáng',
            'tool.laser': 'Laser',
            'tool.video': 'Video',
            'tool.design': 'Thiết kế',
            'tool.previz': 'Previz',

            'cta.title': 'Cùng tạo nên điều <em>khó quên</em>.',
            'cta.text': 'Chia sẻ kế hoạch của bạn và nhận đề xuất được thiết kế riêng, hoàn toàn không ràng buộc.',
            'cta.button': 'Yêu cầu báo giá',
            'contact.eyebrow': 'Liên hệ',
            'contact.title': 'Kết nối với tôi',
            'contact.card1': 'Thông tin liên hệ',
            'contact.card2': 'Thông tin doanh nghiệp',

            'label.email': 'Email',
            'label.website': 'Website',
            'label.facebook': 'Facebook',
            'label.address': 'Địa chỉ',
            'label.vat': 'Mã số VAT',
            'label.bank': 'Ngân hàng',
            'label.iban': 'IBAN',
            'label.terms': 'Điều khoản',
            'label.company': 'Doanh nghiệp',
            'label.owner': 'Giám đốc điều hành',

            'contact.terms': 'Điều khoản chung về cho thuê và mua bán',

            'footer.rights': 'Bảo lưu mọi quyền.',
            'footer.top': 'Lên đầu trang',

            'terms.eyebrow': 'Pháp lý',
            'terms.title': 'Điều khoản chung về <em>cho thuê và mua bán</em>',
            'terms.toc': 'Mục lục',
            'terms.back': 'Quay lại website',
            'terms.backShort': 'Quay lại',
            'terms.notice': 'Bản dịch này chỉ được cung cấp nhằm mục đích thuận tiện tham khảo. Trong trường hợp có bất kỳ sự khác biệt nào, bản tiếng Hà Lan sẽ được ưu tiên áp dụng.',
        },
        th: {
            'meta.home': 'VanEngelandt.NET | ออกแบบไลท์ติ้ง เลเซอร์ และวิดีโอสำหรับงานอีเวนต์',
            'meta.terms': 'ข้อกำหนดและเงื่อนไขทั่วไปในการเช่าและการขาย | VanEngelandt.NET',

            'nav.services': 'บริการ',
            'nav.approach': 'แนวทาง',
            'nav.about': 'เกี่ยวกับเรา',
            'nav.terms': 'เงื่อนไขการขาย',
            'nav.contact': 'ติดต่อ',
            'nav.quote': 'ขอใบเสนอราคา',
            'nav.menu': 'เปิดเมนู',
            'nav.lang': 'เลือกภาษา',

            'hero.eyebrow': 'ไลท์ติ้ง &middot; เลเซอร์ &middot; วิดีโอ &middot; พรีวิช่วลไลเซชัน',
            'hero.title': 'แสงที่<em>กำหนด</em>ทุกช่วงเวลา',
            'hero.lead': 'นักออกแบบแสงและช่างเทคนิคโชว์อิสระ ประจำอยู่ที่ Wevelgem ประเทศเบลเยียม ผมออกแบบ สร้างภาพจำลอง และควบคุมระบบไลท์ติ้ง เลเซอร์ และวิดีโอ ให้กับงานอีเวนต์ โปรดักชัน และองค์กรที่คาดหวังความสมบูรณ์แบบในทุกรายละเอียด',
            'hero.cta': 'พูดคุยเรื่องโปรเจกต์ของคุณ',
            'hero.cta2': 'ดูบริการทั้งหมด',
            'hero.scroll': 'เลื่อนลง',

            'services.eyebrow': 'บริการ',
            'services.title': 'ความเชี่ยวชาญตั้งแต่แนวคิดแรกจนถึงคิวสุดท้าย',
            'services.intro': 'ผู้ประสานงานเพียงคนเดียวสำหรับงานภาพทุกองค์ประกอบในอีเวนต์ของคุณ ด้วยความแม่นยำระดับโปรดักชันทัวร์คอนเสิร์ต',
            's1.title': 'ออกแบบแสง &amp; พรีวิช่วลไลเซชัน',
            's1.text': 'คอนเซปต์ไลท์ติ้งที่ออกแบบเฉพาะงาน ถ่ายทอดวิสัยทัศน์ของคุณให้กลายเป็นบรรยากาศ พร้อมภาพจำลองล่วงหน้าครบถ้วน รวมถึงพรีวิซแบบเรียลไทม์เสมือนจริงด้วย Unreal Engine&nbsp;5',
            's2.title': 'โปรแกรมโชว์ &amp; ควบคุมหน้างาน',
            's2.text': 'โปรแกรมคิวอย่างพิถีพิถันและควบคุมไลฟ์โชว์อย่างมั่นใจบน grandMA3 และ ChamSys ให้ทุกคิวมาตรงจังหวะอย่างแม่นยำ',
            's3.title': 'ออกแบบเลเซอร์',
            's3.text': 'เลเซอร์โชว์ที่ตระการตาและปลอดภัยต่อผู้ชม สร้างสรรค์ด้วย Pangolin Beyond Ultimate และผสานเข้ากับแสงและวิดีโออย่างไร้รอยต่อ',
            's4.title': 'วิดีโอ &amp; มีเดียเซิร์ฟเวอร์',
            's4.text': 'คอนเทนต์ภาพที่มีชีวิตชีวาและการเล่นภาพสดด้วย Resolume Arena ซิงก์ไปพร้อมกับทุกองค์ประกอบของโชว์',
            's5.title': 'ซัพพอร์ตงานโปรดักชันด้านเทคนิค',
            's5.text': 'ติดตั้ง ตั้งค่า และแก้ไขปัญหาหน้างาน พร้อมประสานงานด้านเทคนิคกับสถานที่ ซัพพลายเออร์ และทีมงานอย่างชัดเจน',
            's6.title': 'ที่ปรึกษาด้านอุปกรณ์ &amp; บริการเช่า',
            's6.text': 'คำแนะนำที่เป็นอิสระในการเลือกไฟและระบบที่เหมาะกับงบประมาณของคุณ พร้อมดูแลประสานงานการเช่าอุปกรณ์ให้ครบ',

            'approach.eyebrow': 'แนวทาง',
            'approach.title': 'กระบวนการที่สร้างมาเพื่อความมั่นใจ',
            'a1.title': 'ปรึกษา',
            'a1.text': 'เรากำหนดเป้าหมาย กลุ่มผู้ชม สถานที่ และงบประมาณร่วมกัน พร้อมตกลงขอบเขตงานให้ชัดเจน',
            'a2.title': 'ออกแบบ &amp; พรีวิซ',
            'a2.text': 'คอนเซปต์ถูกวาดขึ้นใน Vectorworks และเนรมิตให้เห็นภาพจริงใน Capture หรือ Unreal Engine&nbsp;5 ร่วมกับ Yunsio SuperStage คุณจึงเดินชมโชว์ได้ก่อนจะแขวนไฟแม้แต่ดวงเดียว',
            'a3.title': 'โปรแกรมมิ่ง',
            'a3.text': 'คิว ไทม์มิ่ง และเอฟเฟกต์ถูกเตรียมไว้ล่วงหน้าแบบออฟไลน์ ทำให้เวลาหน้างานคุ้มค่าและคาดการณ์ได้',
            'a4.title': 'วันโชว์',
            'a4.text': 'ควบคุมโชว์อย่างนิ่งและแม่นยำ ตั้งแต่ไลน์เช็กจนถึงช่วงโค้งคำนับสุดท้าย พร้อมแผนสำรองในทุกสถานการณ์',
            'about.eyebrow': 'เกี่ยวกับเรา',
            'about.title': 'Peter Van Engelandt',
            'about.p1': 'ผมเป็นผู้เชี่ยวชาญอิสระด้านไลท์ติ้ง เลเซอร์ และวิดีโอ ประจำอยู่ที่ Wevelgem ประเทศเบลเยียม ทำงานร่วมกับอีเวนต์เอเจนซี สถานที่จัดงาน บริษัทโปรดักชัน และองค์กรต่าง ๆ ทั่วเบลเยียมและต่างประเทศ',
            'about.p2': 'เวิร์กโฟลว์ของผมตั้งอยู่บนเครื่องมือมาตรฐานอุตสาหกรรม ได้แก่ คอนโซล <strong>grandMA3</strong> และ <strong>ChamSys MQ500M+</strong> สำหรับการควบคุม <strong>Pangolin Beyond Ultimate</strong> สำหรับเลเซอร์ <strong>Resolume Arena</strong> สำหรับวิดีโอ และ <strong>Vectorworks</strong>, <strong>Capture</strong> และ <strong>Unreal Engine&nbsp;5</strong> ร่วมกับ <strong>Yunsio SuperStage</strong> สำหรับการออกแบบและพรีวิช่วลไลเซชัน',
            'about.p3': 'ทุกโปรเจกต์เริ่มต้นจากการรับฟัง เมื่อเข้าใจเป้าหมายของงานคุณอย่างแท้จริง ผมจึงสร้างประสบการณ์ทางภาพที่ยกระดับบรรยากาศ ส่องสปอตไลต์ไปยังจุดที่ควรโดดเด่น และขับเคลื่อนโชว์ด้วยความเสถียรทางเทคนิคอย่างสมบูรณ์',

            'tool.lighting': 'ไลท์ติ้ง',
            'tool.laser': 'เลเซอร์',
            'tool.video': 'วิดีโอ',
            'tool.design': 'ออกแบบ',
            'tool.previz': 'พรีวิซ',

            'cta.title': 'มาร่วมสร้างสรรค์สิ่งที่<em>น่าจดจำ</em>ไปด้วยกัน',
            'cta.text': 'เล่าแผนงานของคุณให้เราฟัง แล้วรับข้อเสนอที่ออกแบบมาเพื่อคุณโดยเฉพาะ โดยไม่มีข้อผูกมัด',
            'cta.button': 'ขอใบเสนอราคา',
            'contact.eyebrow': 'ติดต่อ',
            'contact.title': 'ติดต่อเรา',
            'contact.card1': 'ข้อมูลการติดต่อ',
            'contact.card2': 'ข้อมูลบริษัท',

            'label.email': 'อีเมล',
            'label.website': 'เว็บไซต์',
            'label.facebook': 'Facebook',
            'label.address': 'ที่อยู่',
            'label.vat': 'เลขประจำตัวผู้เสียภาษี (VAT)',
            'label.bank': 'ธนาคาร',
            'label.iban': 'IBAN',
            'label.terms': 'เงื่อนไข',
            'label.company': 'บริษัท',
            'label.owner': 'กรรมการผู้จัดการ',

            'contact.terms': 'ข้อกำหนดและเงื่อนไขทั่วไปในการเช่าและการขาย',

            'footer.rights': 'สงวนลิขสิทธิ์',
            'footer.top': 'กลับขึ้นด้านบน',

            'terms.eyebrow': 'กฎหมาย',
            'terms.title': 'ข้อกำหนดและเงื่อนไขทั่วไปใน<em>การเช่าและการขาย</em>',
            'terms.toc': 'สารบัญ',
            'terms.back': 'กลับสู่เว็บไซต์',
            'terms.backShort': 'กลับ',
            'terms.notice': 'คำแปลฉบับนี้จัดทำขึ้นเพื่อความสะดวกเท่านั้น หากมีข้อความใดขัดหรือแย้งกัน ให้ถือตามฉบับภาษาดัตช์เป็นสำคัญ',
        },
    };

    const LANGS = ['en', 'nl', 'fr', 'zh', 'th', 'vi'];
    // Chinese is written in Simplified characters; the tag also picks the right system font
    const TAG = { zh: 'zh-Hans' };
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
        document.documentElement.lang = TAG[lang] || lang;
        document.documentElement.dataset.lang = lang;
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
            b.setAttribute('aria-checked', on);
        });
        document.querySelectorAll('.lang-code').forEach(el => { el.textContent = lang.toUpperCase(); });
        document.querySelectorAll('.notice-text').forEach(el => { el.closest('.notice').hidden = !el.textContent.trim(); });
        document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
    }

    // Switching language fades the page down and back up, like a crossfade between two cues
    const root = document.documentElement;
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let pending = null;

    // Drop-down: opens under the current language code, closes on choice, outside click or Escape
    const toggle = document.querySelector('.lang-current');
    const menu = document.getElementById('lang-menu');
    function closeMenu(focus) {
        if (!menu || menu.hidden) return;
        menu.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
        if (focus) toggle.focus();
    }
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            if (!menu.hidden) { closeMenu(); return; }
            menu.hidden = false;
            toggle.setAttribute('aria-expanded', 'true');
            (menu.querySelector('.active') || menu.querySelector('button')).focus();
        });
        document.addEventListener('click', e => { if (!e.target.closest('.lang-pick')) closeMenu(); });
        menu.addEventListener('keydown', e => {
            const items = [...menu.querySelectorAll('button')];
            const i = items.indexOf(document.activeElement);
            if (e.key === 'Escape') closeMenu(true);
            else if (e.key === 'ArrowDown') { e.preventDefault(); items[(i + 1) % items.length].focus(); }
            else if (e.key === 'ArrowUp') { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
        });
    }
    document.querySelectorAll('[data-set-lang]').forEach(b => b.addEventListener('click', () => {
        const lang = b.dataset.setLang;
        store.set(lang);
        closeMenu();
        if (still || lang === root.dataset.lang) { apply(lang); return; }
        clearTimeout(pending);
        // The pressed button lights up straight away; the text changes while the page is dark
        document.querySelectorAll('[data-set-lang]').forEach(o => o.classList.toggle('active', o === b));
        document.querySelectorAll('.lang-code').forEach(el => { el.textContent = lang.toUpperCase(); });
        root.classList.add('lang-out');
        pending = setTimeout(() => {
            apply(lang);
            requestAnimationFrame(() => root.classList.remove('lang-out'));
        }, 320);
    }));
    apply(initialLang());
})();
