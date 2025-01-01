const battery = [
  {
    batteryName: "WKL-78",
    capacityAh: 2.3,
    voltage: 14.4,
    maxDraw: 3.2,
    endVoltage: 10,
  },
  {
    batteryName: "WKL-140",
    capacityAh: 4.5,
    voltage: 14.4,
    maxDraw: 9.2,
    endVoltage: 5,
  },
  {
    batteryName: "Wmacro-78",
    capacityAh: 2.5,
    voltage: 14.5,
    maxDraw: 10,
    endVoltage: 5,
  },
  {
    batteryName: "Wmacro-140",
    capacityAh: 3.6,
    voltage: 14.4,
    maxDraw: 14,
    endVoltage: 5,
  },
  {
    batteryName: "IOP-E78",
    capacityAh: 6.6,
    voltage: 14.4,
    maxDraw: 10.5,
    endVoltage: 8,
  },
  {
    batteryName: "IOP-E140",
    capacityAh: 9.9,
    voltage: 14.4,
    maxDraw: 14,
    endVoltage: 10,
  },
  {
    batteryName: "IOP-E188",
    capacityAh: 13.2,
    voltage: 14.4,
    maxDraw: 14,
    endVoltage: 11,
  },
  {
    batteryName: "RYN-C65",
    capacityAh: 4.9,
    voltage: 14.8,
    maxDraw: 4.9,
    endVoltage: 11,
  },
  {
    batteryName: "RYN-C85",
    capacityAh: 6.3,
    voltage: 14.4,
    maxDraw: 6.3,
    endVoltage: 12,
  },
  {
    batteryName: "RYN-C140",
    capacityAh: 9.8,
    voltage: 14.8,
    maxDraw: 10,
    endVoltage: 12,
  },
  {
    batteryName: "RYN-C290",
    capacityAh: 19.8,
    voltage: 14.4,
    maxDraw: 14,
    endVoltage: 12,
  },
];
const camera = [
  {
    brand: "Cakon",
    model: "ABC 3000M",
    powerConsumptionWh: 35.5,
  },
  {
    brand: "Cakon",
    model: "ABC 5000M",
    powerConsumptionWh: 37.2,
  },
  {
    brand: "Cakon",
    model: "ABC 7000M",
    powerConsumptionWh: 39.7,
  },
  {
    brand: "Cakon",
    model: "ABC 9000M",
    powerConsumptionWh: 10.9,
  },
  {
    brand: "Cakon",
    model: "ABC 9900M",
    powerConsumptionWh: 15.7,
  },
  {
    brand: "Go MN",
    model: "UIK 110C",
    powerConsumptionWh: 62.3,
  },
  {
    brand: "Go MN",
    model: "UIK 210C",
    powerConsumptionWh: 64.3,
  },
  {
    brand: "Go MN",
    model: "UIK 230C",
    powerConsumptionWh: 26.3,
  },
  {
    brand: "Go MN",
    model: "UIK 250C",
    powerConsumptionWh: 15.3,
  },
  {
    brand: "Go MN",
    model: "UIK 270C",
    powerConsumptionWh: 20.3,
  },
  {
    brand: "VANY",
    model: "CEV 1100P",
    powerConsumptionWh: 22,
  },
  {
    brand: "VANY",
    model: "CEV 1300P",
    powerConsumptionWh: 23,
  },
  {
    brand: "VANY",
    model: "CEV 1500P",
    powerConsumptionWh: 24,
  },
  {
    brand: "VANY",
    model: "CEV 1700P",
    powerConsumptionWh: 25,
  },
  {
    brand: "VANY",
    model: "CEV 1900P",
    powerConsumptionWh: 26,
  },
];
class Battery {
  constructor(batteryName, capacityAh, voltage, maxDraw, endVoltage) {
    this.batteryName = batteryName;
    this.capacityAh = capacityAh;
    this.voltage = voltage;
    this.maxDraw = maxDraw;
    this.endVoltage = endVoltage;
  }

  // 最大ワット数を計算
  maxWatt() {
    return this.capacityAh * this.voltage;
  }

  // 終了時のワット数を計算
  endWatt() {
    return this.endVoltage * this.maxDraw;
  }

  // 最大使用時間を計算
  maxUseHour(sumWatt) {
    return (this.maxWatt() / sumWatt).toFixed(1);
  }

  createBattElement(sumWatt) {
    const battEleDiv = document.createElement("div");
    battEleDiv.classList.add(
      "w-100",
      "bg-light",
      "border",
      "border-secondary",
      "d-flex",
      "flex-row",
      "justify-content-between",
      "align-items-center"
    );
    const battNameP = document.createElement("p");
    battNameP.classList.add("pl-2", "pb-2", "pt-2", "m-0");
    const battNameS = document.createElement("strong");
    battNameS.innerHTML = this.batteryName;
    battNameP.append(battNameS);
    const battInfoP = document.createElement("p");
    battInfoP.classList.add(
      "pl-2",
      "pb-2",
      "pt-2",
      "mt-0",
      "mb-0",
      "ml-0",
      "mr-2"
    );
    battInfoP.innerHTML = "Estimate " + this.maxUseHour(sumWatt) + " hours";
    battEleDiv.append(battNameP, battInfoP);
    return battEleDiv;
  }
}

const batteryObjects = [];
battery.forEach((batt) => {
  batteryObjects.push(
    new Battery(
      batt["batteryName"],
      batt["capacityAh"],
      batt["voltage"],
      batt["maxDraw"],
      batt["endVoltage"]
    )
  );
});

class Camera {
  constructor(brand, model, powerConsumptionWh) {
    this.brand = brand;
    this.model = model;
    this.powerConsumptionWh = powerConsumptionWh;
  }

  // モデル要素を作成
  createModelElement(brand, index) {
    const optionEle = document.createElement("option");
    optionEle.value = index;
    optionEle.innerHTML = this.model;
    return this.brand === brand ? optionEle : null;
  }
}
const cameraSort = camera.sort(function (a, b) {
  if (a.model > b.model) return true;
  else return false;
});
// カメラオブジェクトの配列を作成
let cameraObjects = [];
cameraSort.forEach((camera) => {
  cameraObjects.push(
    new Camera(camera["brand"], camera["model"], camera["powerConsumptionWh"])
  );
});

// ブランド選択肢を作成
let brandsDic = {};
camera.forEach((dictionary) => {
  brandsDic[dictionary["brand"]] = 1;
});
const brands = Object.keys(brandsDic).sort();
const brandSelectEle = document.getElementById("brand-select");
brands.forEach((brand) => {
  const optionEle = document.createElement("option");
  optionEle.innerHTML = brand;
  brandSelectEle.append(optionEle);
});
// 初期のモデル選択肢を作成
const modelSelectEle = document.getElementById("model-select");
modelSelectEle.innerHTML = this.powerConsumptionWh;
cameraObjects.forEach((cameraObj, index) => {
  modelSelectEle.append(cameraObj.createModelElement(brands[0], index));
});
modelSelectEle.addEventListener("change", updateBatteryList);
// ブランドが選択されたらモデルを更新
brandSelectEle.addEventListener("change", (e) => {
  modelSelectEle.innerHTML = "";
  cameraObjects.forEach((cameraObj, index) => {
    modelSelectEle.append(cameraObj.createModelElement(e.target.value, index));
  });
});
// cameraが更新されたらバッテリーリストを更新
modelSelectEle.addEventListener("change", updateBatteryList);
// ワッテージの入力取得
const inputWattEle = document.getElementById("wattage");
inputWattEle.addEventListener("change", updateBatteryList);
// バッテリーリストを初期化
const initBatteryList = document.getElementById("battery-list");
batteryObjects.forEach((battery) => {
  const totalPowerConsumption = getTotalPowerConsumption();
  initBatteryList.append(battery.createBattElement(totalPowerConsumption));
});
//総電力量計算
function getTotalPowerConsumption() {
  const inputWatt = parseInt(inputWattEle.value, 10) || 0;
  const cameraPower =
    cameraObjects[modelSelectEle.value]?.powerConsumptionWh || 0;
  return inputWatt + cameraPower;
}
// バッテリーリストを更新
function updateBatteryList() {
  const sumWatt = getTotalPowerConsumption();
  initBatteryList.innerHTML = "";
  batteryObjects.forEach((batt) => {
    if (batt.endWatt() > sumWatt) {
      initBatteryList.append(batt.createBattElement(sumWatt));
    }
  });
}
