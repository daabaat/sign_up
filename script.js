let value_check = () => {
  let num = 0;

  if (!$("#name").val()) {
    $("#Rname").remove();
    $("<p> 사용자 이름을 입력하세요. </p>")
      .attr("id", "Rname")
      .insertAfter("#name");
    num++;
  } else {
    $("#Rname").remove();
  }

  if (!$("#email").val()) {
    $("#Remail").remove();
    $("<p> 이메일을 입력하세요. </p>")
      .attr("id", "Remail")
      .insertAfter("#email");
    num++;
  } else {
    $("#Remail").remove();
  }

  if (!$("#password").val()) {
    $("#Rpassword").remove();
    $("<p> 비밀번호를 입력하세요. </p>")
      .attr("id", "Rpassword")
      .insertAfter("#password");
    num++;
  } else {
    $("#Rpassword").remove();
  }

  if (!$("#password_check").val()) {
    $("#Rpassword_check").remove();
    $("<p> 비밀번호를 한번 더 입력하세요. </p>")
      .attr("id", "Rpassword_check")
      .insertAfter("#password_check");
    num++;
  } else {
    $("#Rpassword_check").remove();
  }

  if ($("input[name='gender']:checked").length === 0) {
    $("#Rgender_check").remove();
    $("<p> 성별을 선택해 주세요. </p>")
      .attr("id", "Rgender_check")
      .insertBefore("#terms");
    num++;
  } else {
    $("#Rgender_check").remove();
  }

  return num;
};

let value_print = () => {
  const nameValue = $("#name").val();
  const emailValue = $("#email").val();
  const passwordValue = $("#password").val();
  const passwordCheckValue = $("#password_check").val();
  const genderValue = $("input[name='gender']:checked").val();
  if (passwordValue === passwordCheckValue) {
    $("#name_value").text("사용자 이름 : " + nameValue);
    $("#email_value").text("이메일 주소 : " + emailValue);
    $("#password_value").text("비밀번호 : " + passwordValue);
    $("#gender_value").text("성별 : " + genderValue);
  } else {
    $("#Rpassword_check").remove();
    $("<p> 비밀번호가 일치하지 않습니다. </p>")
      .attr("id", "Rpassword_check")
      .insertAfter("#password_check");
  }
};
