var yasearch = function(form){

    // Поле ввода на сайте
    var sf = s('input.yafield', form);

    // Форма яндекса долго загружается, повесим событие на фокус
    sf.focus(function()
    {
        // Поле ввода для поиска
        var yaf = s('.ya-site-form__input input');

        // Кнопка начала поиска
        var yab = s('.ya-site-form__submit');
        s.trace(yab);

        // Обработчик отправки формы сайта
        form.submit( function()
        {
            s.trace(sf.val());

            yaf.val( sf.val() );

            yab.click();

            return false;

        }, true, true);

        // Обработчик ввода данных в поле ввода
        if( yaf ) sf.keyup(function( o, opt,e )
        {
            s.trace('!!!!!!!!');
            // Нажали enter - все убираем
            if (e.keyCode == 13){
                yaf.val( sf.val() );
                yab.click();
            }

            // Нажали esc - все убираем
            if (e.keyCode == 27) { sf.val(''); sf.blur(); }
        });
    });
};

// Bind yasearhc init on dom load
s('form.yasearch').pageInit(yasearch);