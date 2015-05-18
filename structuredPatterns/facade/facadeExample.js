/*hey can also be integrated with other patterns such as the Module pattern. As we can see below, our instance of the module patterns contains a number of methods which have been privately defined. A Facade is then used to supply a much simpler API to accessing these methods: 
*/
var module = (function() {
 
    var _private = {
        i: 5,
        get: function() {
            console.log( "current value:" + this.i);
        },
        set: function( val ) {
            this.i = val;
        },
        run: function() {
            console.log( "running" );
        },
        jump: function(){
            console.log( "jumping" );
        }
    };
 
    return {
 
        facade: function( args ) {
            _private.set(args.val);
            _private.get();
            if ( args.run ) {
                _private.run();
            }
            _private.jump();
        }
    };
}());
 
 
/* In this example, calling module.facade() will actually trigger a set of private behavior within the module, but again, the user isn't concerned with this. we've made it much easier for them to consume a feature without needing to worry about implementation-level details.
*/
// Outputs: "current value: 10" and "running"

//module.facade( {run: true, val: 10} );
module.facade( {val: 10} );