function cItem(materialName, LbCuYd, percentH2O, percentN, CNRatio, percentLignin, percentCellWall, percentC, percentCAvail, CNAvailable) {
    this.materialName = materialName;
    this.LbCuYd = LbCuYd;
    this.percentH2O = percentH2O;
    this.percentN = percentN;
    this.CNRatio = CNRatio;
    this.percentLignin = percentLignin;
    this.percentCellWall = percentCellWall;
    this.percentC = percentC;
    this.percentCAvail = percentCAvail;
    this.CNAvailable = CNAvailable;
}
const dataFromBackend = [
    {
        materialName: 'Laying Hen Manure',
        LbCuYd: 1479,
    }
];

let formatedData = dataFromBackend.map(item => {
    return new cItem(item.materialName, item.LbCuYd, 69, 8, 6, 3.4, 3.4, 48, 47.7762096178409, 5.97202620223012);
});
//recordID,materialName,LbCuYd,percentH2O,percentN,CNRatio,percentLignin,percentCellWall,percentC,percentCAvail,CNAvailable
var aryCharacteristics = new Array();
aryCharacteristics[0] = new cItem("None", 0, 0, 0, 0, 0, 0, 0, 0, 0);
aryCharacteristics = [...aryCharacteristics, ...formatedData]
// aryCharacteristics[1] = new cItem("Laying Hen Manure", 1479, 69, 8, 6, 3.4, 3.4, 48, 47.7762096178409, 5.97202620223012);
aryCharacteristics[2] = new cItem("Poultry Manure", 1150, 53, 5.35, 10, 2, 38, 53.5, 51.6374092559243, 9.65185236941993);
aryCharacteristics[3] = new cItem("Vegetable Waste", 1585, 87, 3.2, 12, 6, 45, 38.4000015258789, 34.751319890372, 10.8597873039178);
aryCharacteristics[4] = new cItem("Swine Manure", 1620, 80, 3.1, 14, 2.2, 40.5, 43.3999977111816, 41.6686542163803, 13.4415017736328);
aryCharacteristics[5] = new cItem("Food Waste", 1500, 69, 2.5, 15, 0.4, 40, 37.5, 37.0955599806548, 14.8382239922619);
aryCharacteristics[6] = new cItem("Dairy Cow Manure", 1458, 80, 3, 15, 8.5, 57.1, 45, 37.930246703768, 12.6434155679227);
aryCharacteristics[7] = new cItem("Sheep Manure", 1755, 69, 2.7, 16, 6, 45, 43.2000007629395, 39.0952340136102, 14.4797160456161);
aryCharacteristics[8] = new cItem("Grass (compacted)", 650, 82, 3.4, 17, 6, 45, 57.8000030517578, 52.3079769765749, 15.3846986792282);
aryCharacteristics[9] = new cItem("Grass (loose)", 300, 82, 3.4, 17, 6, 45, 57.8000030517578, 52.3079769765749, 15.3846986792282);
aryCharacteristics[10] = new cItem("Cattle Manure", 1458, 81, 2.4, 19, 6, 45, 45.6000022888184, 41.267192801346, 17.194662983973);
aryCharacteristics[11] = new cItem("Coffee Grounds", 1500, 80, 2, 20, 15, 74, 40, 27.4593994972738, 13.7296997486369);
aryCharacteristics[12] = new cItem("Horse Manure", 1620, 72, 1.6, 30, 6, 45, 48, 43.4391481368484, 27.1494671809717);
aryCharacteristics[13] = new cItem("Leaves Fresh", 300, 65, 1.3, 40, 6.5, 31.5, 52, 48.3244247914861, 37.1726358184735);
aryCharacteristics[14] = new cItem("Fruit Waste", 1580, 80, 1.4, 40, 13.4, 52.7, 56, 44.5238675756728, 31.8027630956498);
aryCharacteristics[15] = new cItem("Leaves loose-dry", 100, 15, 0.9, 54, 8, 50, 48.5999984741211, 42.2151305910957, 46.9057018993498);
aryCharacteristics[16] = new cItem("Leaves compact-wet", 500, 38, 0.9, 54, 8, 50, 48.5999984741211, 42.2151305910957, 46.9057018993498);
aryCharacteristics[17] = new cItem("Straw Wheat", 227, 12, 0.4, 80, 14, 85, 32, 21.0648819390762, 52.6622040629626);
aryCharacteristics[18] = new cItem("Newsprint", 225, 5.5, 0.34, 115.5, 20.9, 97, 39.2700004577637, 18.5045633603836, 54.4251857815998);
aryCharacteristics[19] = new cItem("Office Paper", 300, 20, 0.2, 150, 4, 91, 30, 25.764296951096, 128.82148283589);
aryCharacteristics[20] = new cItem("Cardboard", 259, 8, 0.1, 563, 12, 92, 56.2999992370605, 37.778709382554, 377.787088196074);
aryCharacteristics[21] = new cItem("Wood Chips Softwood", 400, 40, 0.09, 641, 28, 95, 57.6900024414063, 20.3768853005642, 226.409827676217);

const items = [
    {
        item_index: 2, fVolume: 1,
    },
    {
        item_index: 2, fVolume: 1,
    },
    {
        item_index: 3, fVolume: 2,
    }
];


const test = new CalculateFormula(aryCharacteristics, items);
let result = test.getTotal();
console.log(result);

class CalculateFormula {


    xLbWet;
    xVolume;
    xLbCuYd;
    xpH2O;
    xLbDry;
    xCAvail;
    xpN;
    xLbC;

    xLbCs = [];
    xLbNs = [];
    xCN;

    xCns = [];
    xTotalC;
    xTotalN;
    xtotalCN;
    xMaterialNames = [];
    xVolumes = [];
    xResultText = "";
    aryCharacteristics = [];
    items = [];

    constructor(aryCharacteristics, items) {
        this.items = items;
        this.aryCharacteristics = aryCharacteristics;
    }

    getTotal() {

        this.items.map((item, index) => {
            this.getValues(item.item_index, index, item.fVolume)
        })

        return {
            xtotalCN: this.xtotalCN,
            xTotalC: this.xTotalC,
            xTotalN: this.xTotalN,
            xResultText: this.xResultText
        }
    }
    getValues(indexNum, MNum, fVolume) {
        // fLbWet_1 fpH20_1 fLbDry_1 fpCAvail_1 fpN_1 fLbC_1 fLbN_1 fCN_1
        // LbCuYd percentH2O percentN CNRatio percentLignin percentCellWall percentC percentCAvail CNAvailable
        this.xVolume = fVolume;

        this.xMaterialNames[MNum] = {
            value: this.aryCharacteristics[indexNum].materialName,
            index: MNum
        };
        this.xVolumes[MNum] = {
            value: this.xVolume,
            index: MNum
        };


        this.xLbWet = (this.aryCharacteristics[indexNum].LbCuYd / 27) * this.xVolume;

        this.xpH2O = (this.aryCharacteristics[indexNum].percentH2O);

        this.xLbCuYd = this.aryCharacteristics[indexNum].LbCuYd;

        this.xLbDry = ((this.xLbCuYd * this.xVolume) / 27) - ((this.xLbCuYd * this.xVolume * this.xpH2O * .01) / 27);



        this.xCAvail = (this.aryCharacteristics[indexNum].percentCAvail);


        this.xpN = (this.aryCharacteristics[indexNum].percentN);


        this.xLbC =
            (((((this.xLbCuYd * this.xVolume) / 27) - ((this.xLbCuYd * this.xVolume * this.xpH2O * .01) / 27))) * this.xCAvail * .01);

        this.xLbCs[MNum] = {
            value: this.xLbC,
            index: MNum
        };


        this.xLbN =
            (((((this.xLbCuYd * this.xVolume) / 27) - ((this.xLbCuYd * this.xVolume * this.xpH2O * .01) / 27))) * this.xpN * .01);

        this.xLbNs[MNum] = {
            value: this.xLbN,
            index: MNum
        };


        this.xCN = (this.aryCharacteristics[indexNum].CNAvailable);

        this.xCns[MNum] = {
            value: this.xCN,
            index: MNum
        };

        this.xTotalC = 0
        this.xLbCs.map(xLbC => {
            if (isNaN(parseFloat(xLbC.value)))
                this.xTotalC = this.xTotalC;
            else
                this.xTotalC += xLbC.value;

        })

        this.xTotalN = 0

        this.xLbNs.map(xLbN => {
            if (isNaN(parseFloat(xLbN.value)))
                this.xTotalN = this.xTotalN;
            else
                this.xTotalN = this.xTotalN + xLbN.value;
        })

        this.xtotalCN = Math.round(100 * (this.xTotalC / this.xTotalN)) / 100;

        this.xResultText = "";


        this.xMaterialNames.map(xMaterialName => {
            const xVolume = this.xVolumes.find(({ index }) => {
                return index === xMaterialName.index;
            })
            if (xMaterialName.value == "None" || xVolume.value == 0) {
                this.xResultText = this.xResultText;
            }
            else {
                this.xResultText = this.xResultText + xVolume.value + " part(s) " + xMaterialName.value + "";
            }
        })

        if (isNaN(this.xtotalCN)) {
            this.xResultText = "";
        }
        else {
            this.xResultText = "For a total C:N Ratio of " + Math.round(this.xtotalCN) + ":1 mix " + "\n" + this.xResultText;
        }

        // console.log('xTotalC', xTotalC);
        // console.log('xTotalN', xTotalN);
        // console.log('xtotalCN', xtotalCN);
        // console.log('xResultText', xResultText);

    }
}
