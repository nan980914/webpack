class HelloWorldPlugin {
    constructor(option) {
        // console.log('oprions,--',option)
    }
    apply(compiler) {
        compiler.hooks.afterEnvironment.tap("xxx", () => {
            console.log("enriconsfaf");
        });
      compiler.hooks.compilation.tap(
        'Hello World Plugin',
        () => {
          console.log('Hello World!');
        }
      );
      compiler.hooks.done.tap(
        'Hello World Plugin',
        (
          stats /* stats is passed as an argument when done hook is tapped.  */
        ) => {
          console.log('done!');
        }
      );
    }
  }
  
  module.exports = HelloWorldPlugin;