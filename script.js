// Newsletter
// Podle postupu níže vyrobte stránku podobnou té na obrázku.
// 1.Vytvořte si novou složku a vytvořte v ní soubory - index.html, style.css a script.js. Soubory propojte.
// 2.Vložte do ní formulář s textovým políčkem a tlačítkem pro přihlášení k odběru.
// 3.Vytvořte posluchač pro událost submit. Jakmile uživatel zadá svůj e-mail a potvrdí přihlášení, zobrazte na stránce místo formuláře zprávu o úspěšném přihlášení k odběru.
// 4.Texty můžete vymyslet vlastní nebo využít následující:
// *Jednou za týden posíláme newsletter ze světa frontendu a UX.
// *Zadejte svůj e-mail a zůstaňte v obraze.
// *Odebírat
// *Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese adresa@domena.cz.
// 5.Pokud máte čas a chuť, nastylujte stránku dle svého citu. Obrázek výše může posloužit jako inspirace.

document.querySelector("#reg_form").addEventListener("submit", (e) => { 
    const eMail = document.querySelector("#email").value
    
    document.body.innerHTML = (`Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${eMail}`)
})

