console.log("connected");


// COPY EMAIL IN CONTACT SECTION
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}
// ^^^REWRITE IN VANILLA JS
// function myFunction() {
//     var copyText = document.getElementById("myemail");
//     copyText.select();
//     copyText.setSelectionRange(0, 99999);
//     document.execCommand("copy");
    
//     var tooltip = document.getElementById("myTooltip");
//     tooltip.innerHTML = "Copied: " + copyText.value;
//   }
  
//   function outFunc() {
//     var tooltip = document.getElementById("myTooltip");
//     tooltip.innerHTML = "Copy to clipboard";
//   }











// VUE TRANSITION TEST 
const one = {
	template: `
		<div class="has-text-grey-light has-text-center px-6">
			<h3 class="is-size-1 has-text-primary-dark">Digital Drumkit</h3>
			<img class="img-fluid" src="https://lh3.googleusercontent.com/eH2vp1F--cvmAhWvdbAniMQjx0Tae4LMSY1Ca13qwi9rwNH1lF-T7asHm2pVLgsm-vhjWFR_BmPuyiTJlOfIK_4vutZeQNGU19ZD7YVQ3b9MyLgXCCfbkyZpy4yDFFXJG3bpUuulcnUCCeKxG3HJFPBNK6FSELxygoKUo1BdpKvuxUq29Hw63F_OpzpASGB5XCIFaCHIoV_SY9Xzr2HPRvMzrax1MafQfTpeILRXghD46pmo_dY4lwb_d6lnULn-kwldRvj4BBEp8WgZPoUwqlKuRb0S5O56Xh0OZcU40MFVh7WiAMZE7mAE41hmUC01X_eW001NfCCk5FMk0PoGiMWO7sFTsA-dJl61UTTlC2Jy0k3ZPSzhBa31k9Y2hCiZEs7q3G7M_qcDQwM7GfGSb5dbeBokQk9wdmiAuAeIaOwz3aXOZ2HD51v7IbmKEvge1W6MssLjsPEQBpsjnVlQzTvUY5FNtqUksA-gwv_a5gSNJOKd00GqCUysNp-c-SYDq4v6QY_s4-3hit8SPmA-U35N5IiObcz4R62ZWFF9sA_4najaxZTzqqC1ZCpcCuLeInDdtwYvOaCKDin79V-nafXHVXUGHAna2dNRRcei_-BZnhiM0h3z8asIA5zEC_D_uV1w8fhJm4FEzNsFhHTcj60h4gcXq78XC7_mk1BQzo4oG_QslWjJ0Q0eOl3XQtLYUZ747x8T4ALEcd5ESTjGB9_C=w1437-h789-no?authuser=0" alt="an oil painting of a Muni bus">
      <p class="has-text-centered has-background-black-ter py-4">
      This is a simple drumkit simulator I made using JavaScript and sleek design.
      </p>
		</div>
	`
}
const two = {
	template: `
		<div class="is-size-1 has-text-danger has-text-center px-6">
			<h3>Pusheen Zodiac</h3>
			<img class="img-fluid" src="https://lh3.googleusercontent.com/5KcEINLtrG81XqRFOoIEnh6PC4sWKmbRNeSU7gCSqnkU4-echrMGHI63OBtRZHqB2wXLcPN95PYgW_3rXsLmsH8WyGe_czqYnx8bEWAOHi5NbKIRZfGn6j4pid8zI7psadjnWCtqzn65XhPDnky2L6Gsr2ZnmPCymPJMXRRF79L_dC3sCJy8bs9r06ANX3Vph-UTw8ipM2C772Cy2PX78w3Zd-fHFpiHyf06fep5gRN656ZH37BGIN87ZJBGl3vPmlZb74MdV2yXxhqcQh7q4CVJhC9gazhSwuQaESLUzUVenYNFE_qsiD-9B1z2aczpRzcqNMbACFnkPYxMKKBg2WaAoF1yf2fa5wu1S9SUIKxqefUC0YPixedbzu6LRFUWKr6yner9vTDIFvNwVByobmyEEIOLVnOY5n8PuP_cXB-EsKHB5uWVuX1qHl4RsUzyHFYco6DCMGYUdMUhHgGGLdL663NghRDC8GP2QOfUczaO33knqpfvuBq93wvxYUb0pq-kN5OjzXWLTuJZ2mCMoPNRPyc6PoPo3Uq4pB058U1LZGsgfYjJExGWTK7YWhERz3Dd4rdrEiJe0d1OSaFIQ-YljFU8AN_w1ggp_3-xjpRJesEvzxg3ALhiIiBhog9q4KC_TDOwCIOlSrpNAD-0zyDuqIH23gj8vjWN0vJbAfbLGYQpbipgk2MSXWOV7MZRhs9XrmXHlkVBN1dtFQltnyKo=w1440-h789-no?authuser=0" alt="A mixed media image of SF and a heart">
		</div>
	`
}
const three = {
	template: `
		<div class="is-size-1 has-text-danger has-text-center px-6">
			<h3>Natours</h3>
			<img class="img-fluid" src="https://lh3.googleusercontent.com/vQg2v4S0EdwGRr4-71_4cEamlveUJ1w2pBCxg_GYtcUDCMGwN34Zi38ngvm4LUIiSMiWh20_UVJNFbqYVu3Ev_XaDEWAL1WhT0NVtN2AtMXl1KYLu_z2VSMMf1kHDVLG9bXRrPZnX9cVcalGO1BqzR_u1Yzdvu32uUfw44kFg0w9rVflngVRxF-AAZu3d1tArWLBcUpNQByq-MtEYd0ncaxDBLrCOj2yQj7Ldw8npt-DivVtdk3wB6EQ8IPMmegxypc41RqjfU9gNLTjU00_aDN_JpccdP2G3wIwbuLH8EX-StOhlE4YKiJfyRKoxQXmruHZEK6gPJcr1R7jtyE6B5CANA7ix8e8vfKW--O7QFDGlnEA-4Tso1gc2UWOd4hgpnh9MFt6XhVGKYpqUqiktd_j5Q-07_AqUXxqG1LzOB0_JUFdtsJ3Y7aJvBhzJH0z5jOytPRp82e2_2ZucpiwSqQFueaeEQQKD1GuLVmopiqGOWRSENDESGTQpu39jzTj5jRFBItWjEmbgqlcnrWOWsIamyhFR0PecmLIZSz41Tc-b936GFJguovsvtS4vXpFQ9QKiYvutBTrGk7RWmsjFy97tVqJz7OVrRi-PVJcL--8UtVn78WLBh4LRMhKq0mP66xoKbdPYMMuw8eU3BANvRGVhsrEOGm36hcUHLA9uPOyTtb9c7uoPMFII179BY-A8pyWU4HwtweOvumEHSIQN0Tr=w1439-h789-no?authuser=0" alt="A watercolor painting of a woman holding rosemary">
		</div>
	`
}
