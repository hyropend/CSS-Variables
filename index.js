const inputs = document.querySelectorAll(".controls input");

function handleUpdate(){
    const sizeUnit = this.dataset.sizing || "";
    console.log(sizeUnit);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + sizeUnit);
}

inputs.forEach(inputs => inputs.addEventListener("change",handleUpdate));
inputs.forEach(inputs => inputs.addEventListener("mousemove",handleUpdate)); /* bunu eklemeden önce mouse hareket ederken değer
 değişmiyordu sadece mouse ile hareket bitince değeri görüyorduk, ama bununla değişimi saniye saniye işleyebiliyoruz. */