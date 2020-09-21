<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Uploading images</title>
    <link rel="stylesheet" href="./css/style.min.css" />
  </head>
  <body>
    <div class="wrapper">
      <main class="page">
        <header class="header"></header>
        
        <form action="index.php" method='POST' enctype='multipart/form-data' class="upload">
          <div class="upload__content">
            <div class="card-start">
              <div class="card-start__body">
                <div class="card-start__title">Upload your image</div>
                <div class="card-start__format">
                  File should be Jpeg, Png,...
                </div>
                <div class="card-start__drop">
                  <div class="card-start__icon">
                    <picture><source srcset="./img/default-img.svg" type="image/webp"><img src="./img/default-img.svg" alt="default" /></picture>
                  </div>
                  <div class="card-start__descr">
                    Drag & Drop your image here
                  </div>
                </div>
                <div class="card-start__or">Or</div>
                
                  <div class="card-start__btn">
                    <label for="image">Choose a file</label>
                    <input type="file" name='image' id="image" class="card-start__input" />
                  </div>
               
              </div>
            </div>
            <div class="card-upload">
              <div class="card-upload__body">
                <div class="card-upload__title">Uploading...</div>
                <div class="card-upload__progress">
                  <span class="card-upload__platform"></span>
                </div>
              </div>
            </div>
            <div class="card-successfully">
              <div class="card-successfully__body">
                <div class="card-successfully__icon">
                  <picture><source srcset="./img/check.webp" type="image/webp"><img src="./img/check.png" alt="check" /></picture>
                </div>
                <div class="card-successfully__title">
                  Uploaded Successfully!
                </div>
                <div class="card-successfully__image">
                  <picture>
                  <!-- <source srcset="./img/default-img.svg" type="image/webp"> -->
                  <img class="user-img" src="./img/default-img.svg" alt="img" /></picture>
                </div>
                <div class="card-successfully__block">
                  <div class="card-successfully__link">
                    
                  </div>
                  <div class="card-successfully__btn">Copy Link</div>
                </div>
              </div>
            </div>
          </div>
      
        </form>
         
      </main>
      <footer class="footer"></footer>
    </div>
    <script src="./js/script.js"></script>
  </body>
</html>
