var Westeros;
(function (Westeros) {
  var Ruler = (function () {
    function Ruler() {
      this.house = new Westeros.House.Targaryen();
    }
    return Ruler;
  })();
  Westeros.Ruler = Ruler;
}) (Westeros || (Westeros = {}));
