document.addEventListener('DOMContentLoaded', function() {
    var changingText = document.querySelector('.changing-text');
    var texts = ["ile Webde İz Bırakan Tasarımlar", "ile Dijital Dünyaya Açılan Kapınız", "ile Web Tasarımında Sınırları Aşın"];
    var index = 0;

    function typeText() {
      changingText.textContent = ''; // Her seferinde sıfırla
      var text = texts[index];
      var i = 0;

      function addLetter() {
        changingText.textContent += text[i];
        i++;

        if (i < text.length) {
          setTimeout(addLetter, 100); // Yazma hızını buradan ayarlayabilirsiniz
        } else {
          setTimeout(deleteText, 1000); // Silme hızını buradan ayarlayabilirsiniz
        }
      }

      addLetter();
    }

    function deleteText() {
      setTimeout(function() {
        changingText.textContent = changingText.textContent.slice(0, -1);

        if (changingText.textContent === '') {
          index = (index + 1) % texts.length;
          typeText(); // Bir metin tamamlandığında bir sonrakine geç
        } else {
          deleteText();
        }
      }, 100); // Silme hızını buradan ayarlayabilirsiniz
    }

    // İlk kez çağrı
    typeText();
  });
