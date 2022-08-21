<template>
  <div dir="ltr">
    <div class="d-flex justify-content-around bd-highlight">
      <a class="align-self-center"  href="https://www.facebook.com/MFPE.GOV.TN">
        <img
          class="a m-2 m-md-3 img-fluid"
          src="../assets/logo/wzara.jpg"
          alt="وزارة التشغيل والتكوين المهني"
        />
      </a>
<a class="align-self-center" href="">
      <img
        class="a m-2 m-md-3 img-fluid"
        src="../assets/logo/OIT_LOGO.jpg"
        alt="oil"
      /></a>
      <a class="align-self-center" href="https://www.facebook.com/bdgpe"
        ><img
          class="a m-2 m-md-3 img-fluid"
          src="../assets/logo/logo-AR-FR-DPE.png"
          alt="مندوب حماية الطفولة - Délégué à la Protection de l'Enfance"
      /></a>
      <a class="align-self-center"
        href="https://www.facebook.com/protecteensemblecontreletravaildesenfants/"
      >
        <img
          class="a m-md-3 m-3 b img-fluid"
          src="../assets/286183114_317736030553726_8465749134828605490_n.png"
          alt="Protect"
      /></a>
      <a class="align-self-center" href="https://www.facebook.com/AssociationBara2a">
      <img
        class="a m-2 m-md-3 img-fluid"
        src="../assets/logo/association_baraa_.png"
        alt="جمعية براءة لحماية الطفولة المهددة - Association innocence"
      /></a>
    </div>
    <footer>
      <div class="container py-5">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-3">
            <h4>Projet réalisé par:</h4>
            <img
              class="img-fluid logo"
              src="../assets/logo/logo_association_baraa_fr.png"
              alt=""
            />
          </div>
          <div class="col-xs-12 col-sm-6 col-md-2">
            <h4>A propos :</h4>
            <h5> <router-link to="/about">Qui sommes nous ?</router-link> </h5>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <h4>contact :</h4>
            <h5><i class="bi bi-phone yellow"></i>&nbsp;+216 22 426 752</h5>
            <h5><i class="bi bi-telephone yellow"></i>&nbsp;74 201 833</h5>
            <h5>
              <i class="bi bi-geo-alt-fill yellow"></i>&nbsp;Rue Hedi Chaker 97
              , 2éme étage , Sfax , Tunisie
            </h5>
            <h5>
              <i class="bi bi-envelope yellow"></i>&nbsp;Takwiniyahmini@gmail.com
            </h5>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3">
            <h4>Résaux sociaux :</h4>
            <div class="d-flex flex-row bd-highlight mb-3">
              <div class="p-2 bd-highlight">
                <a target="_blank" href="https://www.facebook.com/AssociationBara2a">
                  <img src="../assets/1.png" alt="" />
                </a>  
              </div>
              <div class="p-2 bd-highlight">
                <a target="_blank" href="https://www.youtube.com/channel/UCwR33HYhcTz1aXgYIUMl6yg">
                <img src="../assets/2.png" alt="" />
                </a>
              </div>
              <div class="p-2 bd-highlight">
                <img src="../assets/3.png" alt="" />
              </div>
              <div class="p-2 bd-highlight">
                <img src="../assets/4.png" alt="" />
              </div>
              <div class="p-2 bd-highlight">
                <a href="https://www.instagram.com/associationinnocence/" target="_blank">
                <img src="../assets/5.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <!--<div class="col-xs-12 col-sm-6 col-md-2">
            <button type="button" class="btn btn-warning">
              <span> Faire un don</span>
            </button>
          </div>-->
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Readex+Pro:wght@600&display=swap');
*{

font-family: 'Lato';

}
@media screen {
  .a {
    max-width: 133px;
    max-height: 133px;
  }
  .b{
  width: 140px;
  height: 140px;
}
}
@media (max-width: 720px) {
  .a {
    max-width: 50px;
  }
  .b{
    width: 50px;
    height: 50px;
  }
  .logo {
    max-width: 120px;
  }
}
h4 {
  color: rgba(252, 204, 17, 1);
}
footer {
  background-color: rgba(37, 56, 156, 1);
}
h5 {
  color: white;
}
h5>a {
  color: white;
}
.yellow {
  color: rgba(252, 204, 17, 1);
}
button > span {
  color: rgba(37, 56, 156, 1);
}

</style>