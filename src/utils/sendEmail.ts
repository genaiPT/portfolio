import { FormData } from "@/components/contact/Contact";

export function sendEmail(data: FormData, handleModal: () => void) {
  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      //alert(response.message);
      handleModal();
    })
    .catch((err) => {
      alert(err);
    });
}
