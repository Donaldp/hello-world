/* App Code */

    function Hello_World_Load() {
        document.title                 = 'Hello World';
        document.body.style.background = '#eee';
        document.body.style.color      = 'black';
        document.body.style.margin     = '0px';
        helloworld();
        application.run();
    }
    
    function application_onReady() {
        application.onExit('kill');
    }
    
    function helloworld() {
        inputDialog.show('What is your name?', '', 'OK');
        inputDialog.catchresults();
        
        var name = inputDialog.inputdata;
        if (name != '')
        {
            output.writeline('Hello '+ name);
            document.getElementById('lblh').innerHTML = 'Hello '+ name;
        }
    }
