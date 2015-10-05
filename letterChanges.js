(function(){

   function isLetter(unicode) {
      var aUnicode = 'a'.charCodeAt(0);
      var zUnicode = 'z'.charCodeAt(0);
      if(unicode >= aUnicode && unicode <= zUnicode) {
         return true;
      }
      else {
         return false;
      }
   }

   function nextCharacter(character) {
      var unicodeOfCharacter = character.charCodeAt(0);
      if(isLetter(unicodeOfCharacter)) {
         if(character === 'z') {
            return 'a';
         }
         else {
            var nextUnicode = unicodeOfCharacter + 1;
            return String.fromCharCode(nextUnicode);
         }
      }
      else {
         return character;
      }
   }

   function isVowel(character) {
      var allVowels = ['a', 'e', 'i', 'o', 'u'];
      if(allVowels.indexOf(character) !== -1) {
         return true;
      }
      else {
         return false;
      }
   }

   function capitalize(character) {
      var unicodeOfCharacter = character.charCodeAt(0);
      var unicodeOfCapitalCharacter = unicodeOfCharacter - 32;
      return String.fromCharCode(unicodeOfCapitalCharacter);
   }

   function capitalizeVowels(character) {
      if(isVowel(character)) {
         return capitalize(character);
      }
      else {
         return character;
      }
   }

   function joinCharacters(previous, next) {
      return previous.concat(next);
   }

   function applyLetterChanges(str) {
      var charArray = str.split("");
      var changedStr =
         _(charArray).chain()
                     .map(nextCharacter)
                     .map(capitalizeVowels)
                     .reduce(joinCharacters)
                     .value();
      return changedStr;
   }

   var inputString1 = document.getElementById("Input String 1").textContent;
   document.getElementById("Changed String 1").innerHTML = applyLetterChanges(inputString1);

   var inputString2 = document.getElementById("Input String 2").textContent;
   document.getElementById("Changed String 2").innerHTML = applyLetterChanges(inputString2);
})();