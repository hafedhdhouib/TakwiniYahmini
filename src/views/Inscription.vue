<template>
  <main class="container m-5">
    <form class="form p-5 align-center">
<div class="text-center d-inline-block fs-1 fw-normal rounded-pill"><p class="m-3 ">
  تسجيل الدخول للتوجيه المهني
</p> </div>

    <div class="row">
      <div class="col-5">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="fs-3 form-label">الاسم و اللقب
          </label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" required />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-5">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="fs-3 form-label">رقم الهاتف
          </label>
          <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="" required />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-5">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="fs-3 form-label">العنوان
          </label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" required />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="fs-3 form-label">عنوان البريد الإلكتروني
          </label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" required />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="fs-3 form-label">المستوى الدراسي
          </label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" required />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="fs-3 form-label">سنة الانقطاع عن الدراسة
          </label>
          <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="" required />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="fs-3 form-label">السن </label>
          <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="" required />
        </div>
      </div>
    </div>
        <button class="btn btn-warning" type="submit">Submit form</button>

    </form>
  </main>
</template>

<script>
export default {};
</script>

<style>
.form{
  
  background-color: #25389C;
}
.fs-3 {
  color: white;
}
.text-center{
  color: #25389C;
  background-color: #FCCE02;
;
}
.round{
  border-radius:90 ;
}
</style>