// script.js

// Objeto que armazena todas as traduções
const translations = {
  pt: {
    menu_entradas: "ENTRADAS", menu_saladas: "SALADAS", menu_pratos: "PRATOS TÍPICOS",
    menu_especialidades: "ESPECIALIDADES", menu_infantil: "INFANTIL",
    titulo_entradas: "ENTRADAS", titulo_saladas: "SALADAS", titulo_pratos: "PRATOS TÍPICOS",
    titulo_especialidades: "ESPECIALIDADES", titulo_infantil: "INFANTIL",
    cardapio_text: "CONFIRA NOSSO CARDÁPIO",
    entrada1: "Croquete de carne", entrada2: "Steak tartar", entrada3: "Tartar de salmão",
    entrada4: "Patês diversos", entrada5: "Pão de centeio",
    salada1: "Salada de pato", salada2: "Salada de Salmão", salada3: "Salada de Frango",
    prato1: "Salsicha branca com ervas", prato2: "Salsichão defumado", prato3: "Linguiça Nuremberg",
    prato4: "Linguiça branca de vitela", prato5: "Salsicha Frankfurter", prato6: "Bolo de carne",
    prato7: "Krakauer (salsichão bovino de 500g)",
    esp1: "Kassler (carré de porco defumado)", esp2: "Eisbein (joelho de porco cozido)",
    esp3: "Eisbein Defumado", esp4: "Eisbein Grelhado", esp5: "Pato assado",
    infantil1: "Salsichas tipo Viena, batata frita e arroz", menu_sobre: "📜 Sobre", about_title: "🏔 A História do Alpin Restaurant",
    about_text: "No coração das montanhas de Urubici, onde o frio abraça a alma e a natureza parece sussurrar tradições antigas, nasceu o Alpin Restaurant — um pedaço da Baviera fincado no sul do Brasil. Tudo começou com uma família de origem germânica-bávara, que há gerações trazia na bagagem mais do que sotaques e receitas: trazia costumes, sabores e um jeito acolhedor de servir à mesa. Inspirados nas casas rústicas da Alemanha do sul, decidiram criar um espaço onde o tempo parece desacelerar, e onde cada prato conta uma história. O nome Alpin vem das lembranças dos Alpes Bávaros — montanhas que, assim como a Serra Catarinense, são imponentes, frias e belas. O restaurante foi erguido com respeito às raízes e à cultura local, criando uma harmonia única entre a gastronomia tradicional alemã e o cenário mágico de Urubici. Aqui, cada detalhe importa. Das salsichas artesanais ao joelho de porco cozido lentamente, do pão de centeio fresquinho aos pratos infantis com carinho de vó. A música ambiente, a madeira aquecida do salão, o aroma do kassler defumado... tudo foi pensado para transportar você a uma típica taverna da Baviera. Mais que um restaurante, o Alpin é um lugar para celebrar a cultura, aquecer o coração e criar memórias ao redor da mesa. Seja bem-vindo à nossa casa. Willkommen."
  },
  en: {
    menu_entradas: "STARTERS", menu_saladas: "SALADS", menu_pratos: "TRADITIONAL DISHES",
    menu_especialidades: "SPECIALTIES", menu_infantil: "KIDS MENU",
    titulo_entradas: "STARTERS", titulo_saladas: "SALADS", titulo_pratos: "TRADITIONAL DISHES",
    titulo_especialidades: "SPECIALTIES", titulo_infantil: "KIDS MENU",
    cardapio_text: "CHECK OUR MENU",
    entrada1: "Meat croquette", entrada2: "Beef tartare", entrada3: "Salmon tartare",
    entrada4: "Various pâtés", entrada5: "Rye bread",
    salada1: "Duck salad", salada2: "Salmon salad", salada3: "Chicken salad",
    prato1: "White sausage with herbs", prato2: "Smoked sausage", prato3: "Nuremberg sausage",
    prato4: "Veal white sausage", prato5: "Frankfurter sausage", prato6: "Meatloaf",
    prato7: "Krakauer (500g beef sausage)",
    esp1: "Kassler (smoked pork chop)", esp2: "Eisbein (boiled pork knuckle)",
    esp3: "Smoked Eisbein", esp4: "Grilled Eisbein", esp5: "Roast duck",
    infantil1: "Vienna sausages, fries and rice", menu_sobre: "📜 About", about_title: "🏔 The Story of Alpin Restaurant",
    about_text: "In the heart of the Urubici mountains, where the cold embraces the soul and nature seems to whisper ancient traditions, the Alpin Restaurant was born — a slice of Bavaria nestled in southern Brazil. It all began with a family of German-Bavarian origin, who for generations brought with them more than just accents and recipes: they carried customs, flavors, and a warm way of serving at the table. Inspired by the rustic homes of southern Germany, they decided to create a space where time seems to slow down and every dish tells a story. The name Alpin comes from memories of the Bavarian Alps — mountains that, just like the Catarinense Highlands, are majestic, cold, and beautiful. The restaurant was built with respect for its roots and local culture, creating a unique harmony between traditional German cuisine and the magical scenery of Urubici. Here, every detail matters. From the handcrafted sausages to the slow-cooked pork knuckle, from the fresh rye bread to the children’s dishes made with grandma’s love. The ambient music, the warm wooden hall, the aroma of smoked kassler... everything was designed to transport you to a typical Bavarian tavern. More than just a restaurant, Alpin is a place to celebrate culture, warm the heart, and create memories around the table. Welcome to our home. Willkommen."
  },
  de: {
    menu_entradas: "VORSPEISEN", menu_saladas: "SALATE", menu_pratos: "TRADITIONELLE GERICHTE",
    menu_especialidades: "SPEZIALITÄTEN", menu_infantil: "KINDERGERICHTE",
    titulo_entradas: "VORSPEISEN", titulo_saladas: "SALATE", titulo_pratos: "TRADITIONELLE GERICHTE",
    titulo_especialidades: "SPEZIALITÄTEN", titulo_infantil: "KINDERGERICHTE",
    cardapio_text: "SIEHE UNSERE SPEISEKARTE",
    entrada1: "Fleischkroketten", entrada2: "Rindertatar", entrada3: "Lachstatar",
    entrada4: "Verschiedene Pasteten", entrada5: "Roggenbrot",
    salada1: "Entensalat", salada2: "Lachssalat", salada3: "Hähnchensalat",
    prato1: "Weiße Wurst mit Kräutern", prato2: "Geräucherte Wurst", prato3: "Nürnberger Wurst",
    prato4: "Kalbsweiße Wurst", prato5: "Frankfurter Wurst", prato6: "Fleischklops",
    prato7: "Krakauer (500g Rindwurst)",
    esp1: "Kassler (geräuchertes Schweinekotelett)", esp2: "Eisbein (gekochtes Schweinshaxe)",
    esp3: "Geräuchertes Eisbein", esp4: "Gegrilltes Eisbein", esp5: "Gebratene Ente",
    infantil1: "Wiener Würstchen, Pommes und Reis", menu_sobre: "📜 Über", about_title: "🏔 Die Geschichte des Alpin Restaurants",
    about_text: "Im Herzen der Urubici-Berge, wo die Kälte die Seele umarmt und die Natur uralte Traditionen zu flüstern scheint, wurde das Alpin Restaurant geboren – ein Stück Bayern im Süden Brasiliens. Alles begann mit einer Familie deutsch-bayerischer Herkunft, die über Generationen hinweg mehr als nur Akzente und Rezepte mitbrachte: Sie brachten Bräuche, Aromen und eine herzliche Art, den Tisch zu decken. Inspiriert von den rustikalen Häusern Süddeutschlands beschlossen sie, einen Ort zu schaffen, an dem die Zeit langsamer vergeht und jedes Gericht eine Geschichte erzählt. Der Name Alpin stammt aus den Erinnerungen an die Bayerischen Alpen – Berge, die wie die Serra Catarinense imposant, kalt und wunderschön sind. Das Restaurant wurde mit Respekt vor den Wurzeln und der lokalen Kultur erbaut, wodurch eine einzigartige Harmonie zwischen der traditionellen deutschen Küche und der magischen Landschaft von Urubici entstand. Hier zählt jedes Detail. Von den handgemachten Würsten bis zur langsam geschmorten Schweinshaxe, vom frischen Roggenbrot bis zu den Kindergerichten mit Oma-Liebe. Die Hintergrundmusik, das warme Holz des Gastraums, der Duft von geräuchertem Kassler... alles wurde so gestaltet, dass Sie sich wie in einer typischen bayerischen Taverne fühlen. Mehr als nur ein Restaurant ist das Alpin ein Ort, um Kultur zu feiern, das Herz zu erwärmen und rund um den Tisch Erinnerungen zu schaffen. Herzlich willkommen in unserem Haus. Willkommen."
  }
};

// Função que busca e aplica as traduções nos elementos da página
function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });
}

// Lógica principal que é executada após o carregamento da página
document.addEventListener('DOMContentLoaded', () => {
  // Define o idioma padrão ao carregar
  setLanguage('pt');

  // Seleciona os elementos necessários
  const menuLinks = document.querySelectorAll('.menu a.nav-link');
  const menuContent = document.getElementById('menu-content');

  // Adiciona um evento de clique para cada link do menu
  menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      // 1. Mostra a área de conteúdo se ela estiver escondida
      const computedStyle = window.getComputedStyle(menuContent);
      if (computedStyle.display === 'none') {
        menuContent.style.display = 'block';
        setTimeout(() => {
          menuContent.style.opacity = '1';
        }, 10);
      }

      // 2. Lida com o destaque do item ativo
      menuLinks.forEach(item => item.classList.remove('active'));
      this.classList.add('active');

      // 3. Rola suavemente até a seção correta
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});