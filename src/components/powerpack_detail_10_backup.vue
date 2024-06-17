<template>
  
  <div id="inspire" class="ma-0 pa-10">
    <br>
    <!--
    <img src = "@/assets/title-10kw.png" />
    -->

    <h3 class="font-weight-bold text-left"></h3>
    <h3 class="font-weight-bold text-center"> :&nbsp;: &nbsp; P O W E R P A C K  &nbsp; M O N I T O R I N G &nbsp; :&nbsp;: &nbsp; 1 0 k W</h3>
<br>
<br>
<br>
    <v-row>
      <v-col>
        <h5 class="font-weight-bold text-left"> &nbsp; S Y S T E M</h5>
        <v-card
        border="opacity-50 sm"
        class="mx-auto"
        max-width="600"
        rounded="xl"
        variant="text"
      >
        
        <v-data-table
          :headers="System"
          :items="System_detail"
          class="elevation-1 font-weight-bold"
          :footer-props="{ 'items-per-page-text': '목록 개수' }"
          :items-per-page="50"
        >
          <template v-slot:items="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.calories }}</td>
            <td class="text-xs-right">{{ props.item.fat }}</td>
            <td class="text-xs-right">{{ props.item.carbs }}</td>
            <td class="text-xs-right">{{ props.item.protein }}</td>
            <td class="text-xs-right">{{ props.item.iron }}</td>
          </template>
        </v-data-table>
        </v-card>
      </v-col>

      <v-col>
        <h5 class="font-weight-bold text-left"> &nbsp; S C U</h5>
        <v-card
        border="opacity-50 sm"
        class="mx-auto"
        max-width="600"
        rounded="xl"
        variant="text"
      >
        <v-data-table
          :headers="SCU"
          :items="SCU_detail"
          class="elevation-1 font-weight-bold"
          :footer-props="{ 'items-per-page-text': '목록 개수' }"
          :items-per-page="50"
        >
          <template v-slot:items="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.calories }}</td>
            <td class="text-xs-right">{{ props.item.fat }}</td>
            <td class="text-xs-right">{{ props.item.carbs }}</td>
            <td class="text-xs-right">{{ props.item.protein }}</td>
            <td class="text-xs-right">{{ props.item.iron }}</td>
          </template>
        </v-data-table>
        </v-card>

      </v-col>

      <br />

      <v-col>
        <h5 class="font-weight-bold text-left">&nbsp; S P D U</h5>
        <v-card
        border="opacity-50 sm"
        class="mx-auto"
        max-width="600"
        rounded="xl"
        variant="text"
      >
        <v-data-table
          :headers="SPDU"
          :items="SPDU_detail"
          class="elevation-1 font-weight-bold"
          :footer-props="{ 'items-per-page-text': '목록 개수' }"
          :items-per-page="50"
        >
          <template v-slot:items="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.calories }}</td>
            <td class="text-xs-right">{{ props.item.fat }}</td>
            <td class="text-xs-right">{{ props.item.carbs }}</td>
            <td class="text-xs-right">{{ props.item.protein }}</td>
            <td class="text-xs-right">{{ props.item.iron }}</td>
          </template>
        </v-data-table>
        </v-card>
        <br />
</v-col>

<v-col>

        <h5 class="font-weight-bold text-left">&nbsp; C O N V E R T E R</h5>
        <v-card
        border="opacity-50 sm"
        class="mx-auto"
        max-width="600"
        rounded="xl"
        variant="text"
      >
        <v-data-table
          :headers="CONVERTER"
          :items="CONVERTER_detail"
          class="elevation-1 font-weight-bold"
          :footer-props="{ 'items-per-page-text': '목록 개수' }"
          :items-per-page="50"
        >
          <template v-slot:items="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.calories }}</td>
            <td class="text-xs-right">{{ props.item.fat }}</td>
            <td class="text-xs-right">{{ props.item.carbs }}</td>
            <td class="text-xs-right">{{ props.item.protein }}</td>
            <td class="text-xs-right">{{ props.item.iron }}</td>
          </template>
        </v-data-table>
        </v-card>
      </v-col>

      <v-col>

        <h5 class="font-weight-bold text-left">&nbsp; M P D U</h5>
        <v-card
        border="opacity-50 sm"
        class="mx-auto"
        max-width="600"
        rounded="xl"
        variant="text"
      >
        <v-data-table
          :headers="CONVERTER"
          :items="CONVERTER_detail"
          class="elevation-1 font-weight-bold"
          :footer-props="{ 'items-per-page-text': '목록 개수' }"
          :items-per-page="50"
        >
          <template v-slot:items="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.calories }}</td>
            <td class="text-xs-right">{{ props.item.fat }}</td>
            <td class="text-xs-right">{{ props.item.carbs }}</td>
            <td class="text-xs-right">{{ props.item.protein }}</td>
            <td class="text-xs-right">{{ props.item.iron }}</td>
          </template>
        </v-data-table>
        </v-card>
      </v-col>



    </v-row>



 

  </div>
</template>

<script>
import mqtt from "mqtt";
import { nanoid } from "nanoid";
import droneinfo from "@/assets/drone_info.json";
import mavlink from "../js/mavlink";
import dgram from "dgram";

const data = droneinfo;

export default {
name: "app",
components: {},

data() {
  return {
    System: [
      {
        text: "NAME",
        align: "left",
        sortable: false,
        value: "name",
      },
      { text: "VALUE", value: "value", align: "left", sortable: false },
      { text: "UNIT", value: "unit", align: "left", sortable: false },
    ],
    System_detail: [
      {
        name: "F/W Version",
        value: 1.1,
        unit: "N/A",
      },
      {
        name: "System Status",
        value: 0,
        unit: "N/A",
      },
      {
        name: "System Error - Warning",
        value: 0,
        unit: "N/A",
      },
      {
        name: "System Error - danger",
        value: 0,
        unit: "N/A",
      },
      {
        name: "System Error - fault",
        value: 0,
        unit: "N/A",
      },
      {
        name: "Power Pack Voltage",
        value: 20,
        unit: "V",
      },
      {
        name: "Power Pack Current",
        value: 20,
        unit: "A",
      },
      {
        name: "Power Pack Power",
        value: 4000,
        unit: "W",
      },
      {
        name: "Power Pack Power",
        value: 4000,
        unit: "W",
      },
      {
        name: "Max. Stack Voltage",
        value: 20,
        unit: "V",
      },
      {
        name: "Avg. Stack Voltage",
        value: 20,
        unit: "V",
      },
      {
        name: "Min. Stack Voltage",
        value: 20,
        unit: "V",
      },
      {
        name: "Max. Stack Voltage Location",
        value: 8,
        unit: "N/A",
      },
      {
        name: "Min. Stack Voltage Location",
        value: 8,
        unit: "N/A",
      },
      {
        name: "Stack Voltage Imbalance",
        value: 20,
        unit: "V",
      },
      {
        name: "Max. Stack Temperature",
        value: 13,
        unit: "℃",
      },
      {
        name: "Avg. Stack Temperature",
        value: 13,
        unit: "℃",
      },
      {
        name: "Min. Stack Temperature",
        value: 13,
        unit: "℃",
      },
      {
        name: "Max. Stack Temperature Location",
        value: 8,
        unit: "N/A",
      },
      {
        name: "Min. Stack Temperature Location",
        value: 8,
        unit: "N/A",
      },
      {
        name: "Stack Temperature Imbalance",
        value: 17,
        unit: "℃",
      },
      {
        name: "H2 Tank 1 Pressure",
        value: 40,
        unit: "bar",
      },
      {
        name: "H2 Tank 2 Pressure",
        value: 40,
        unit: "bar",
      },
      {
        name: "H2 Tank 1 Gauge",
        value: 10,
        unit: "%",
      },
      {
        name: "H2 Tank 2 Gauge",
        value: 10,
        unit: "%",
      },
      {
        name: "Battery String Voltage",
        value: 1111,
        unit: "V",
      },
      {
        name: "Battery String Current",
        value: 1111,
        unit: "A",
      },
      {
        name: "Battery String Power",
        value: 1111,
        unit: "W",
      },
      {
        name: "Power Pack Power",
        value: 1111,
        unit: "W",
      },
      {
        name: "Max. Battery Module Voltage",
        value: 1111,
        unit: "V",
      },
      {
        name: "Min. Battery Module Voltage",
        value: 1111,
        unit: "V",
      },
      {
        name: "Max. Battery Module Voltage Location",
        value: 1111,
        unit: "N/A",
      },
      {
        name: "Min. Battery Module Voltage Location",
        value: 1111,
        unit: "N/A",
      },
      {
        name: "Battery Module Voltage Imbalance",
        value: 1111,
        unit: "V",
      },
      {
        name: "Max. Battery Module Temperature",
        value: 1111,
        unit: "℃",
      },
      {
        name: "Avg. Battery Module Temperature",
        value: 1111,
        unit: "℃",
      },
      {
        name: "Min. Battery Module Temperature",
        value: 1111,
        unit: "℃",
      },
      {
        name: "Battery Module Temperature Imbalance",
        value: 1111,
        unit: "℃",
      },
      {
        name: "Battery SoC",
        value: 1111,
        unit: "%",
      },
      {
        name: "Ambient Temperature",
        value: 1111,
        unit: "℃",
      },
      {
        name: "Ambient Humidity",
        value: 1111,
        unit: "%",
      },
      {
        name: "H2 Leakage",
        value: 1111,
        unit: "ppm",
      },
      {
        name: "Max. FAN Speed",
        value: 1111,
        unit: "us",
      },
      {
        name: "Min. FAN Speed",
        value: 1111,
        unit: "us",
      },
    ],

    SCU: [
      {
        text: "NAME",
        align: "left",
        sortable: false,
        value: "name",
      },
      { text: "SCU1", value: "SCU1", sortable: false },
      { text: "SCU2", value: "SCU2", sortable: false },
      { text: "SCU3", value: "SCU3", sortable: false },
      { text: "SCU4", value: "SCU4", sortable: false },
      { text: "UNIT", value: "UNIT", sortable: false },
    ],
    SCU_detail: [
      {
        name: "F/W Version",
        SCU1: 1.1,
        SCU2: 1.1,
        SCU3: 1.1,
        SCU4: 1.1,
        UNIT: "N/A",
      },
      {
        name: "Status",
        SCU1: 0,
        SCU2: 0,
        SCU3: 0,
        SCU4: 0,
        UNIT: "N/A",
      },
      {
        name: "Error - warning",
        SCU1: 0,
        SCU2: 0,
        SCU3: 0,
        SCU4: 0,
        UNIT: "N/A",
      },
      {
        name: "Error - danger",
        SCU1: 0,
        SCU2: 0,
        SCU3: 0,
        SCU4: 0,
        UNIT: "N/A",
      },
      {
        name: "Error - fault",
        SCU1: 0,
        SCU2: 0,
        SCU3: 0,
        SCU4: 0,
        UNIT: "N/A",
      },
      {
        name: "Stack-H Voltage",
        SCU1: 20,
        SCU2: 20,
        SCU3: 20,
        SCU4: 20,
        UNIT: "V",
      },
      {
        name: "Stack-L Voltage",
        SCU1: 20,
        SCU2: 20,
        SCU3: 20,
        SCU4: 20,
        UNIT: "V",
      },
      {
        name: "Stack Current",
        SCU1: 20,
        SCU2: 20,
        SCU3: 20,
        SCU4: 20,
        UNIT: "A",
      },
      {
        name: "Battery Voltage",
        SCU1: 20,
        SCU2: 20,
        SCU3: 20,
        SCU4: 20,
        UNIT: "V",
      },
      {
        name: "Stack-H Temperature #1",
        SCU1: 13,
        SCU2: 13,
        SCU3: 13,
        SCU4: 13,
        UNIT: "℃",
      },
      {
        name: "Stack-H Temperature #2",
        SCU1: 13,
        SCU2: 13,
        SCU3: 13,
        SCU4: 13,
        UNIT: "℃",
      },
      {
        name: "Stack-H Temperature #3",
        SCU1: 13,
        SCU2: 13,
        SCU3: 13,
        SCU4: 13,
        UNIT: "℃",
      },
      {
        name: "Stack-H Temperature #4",
        SCU1: 13,
        SCU2: 13,
        SCU3: 13,
        SCU4: 13,
        UNIT: "℃",
      },
      {
        name: "Stack-H Temperature #5",
        SCU1: 13,
        SCU2: 13,
        SCU3: 13,
        SCU4: 13,
        UNIT: "℃",
      },
      {
        name: "Stack-H Temperature #6",
        SCU1: 13,
        SCU2: 13,
        SCU3: 13,
        SCU4: 13,
        UNIT: "℃",
      },
      {
        name: "Stack-H Temperature #7",
        SCU1: 13,
        SCU2: 13,
        SCU3: 13,
        SCU4: 13,
        UNIT: "℃",
      },
      {
        name: "Stack-L Temperature #1",
        SCU1: 13,
        SCU2: 13,
        SCU3: 13,
        SCU4: 13,
        UNIT: "℃",
      },
      {
        name: "Stack-L Temperature #2",
        SCU1: 13,
        SCU2: 13,
        SCU3: 13,
        SCU4: 13,
        UNIT: "℃",
      },
      {
        name: "Stack-L Temperature #3",
        SCU1: 13,
        SCU2: 13,
        SCU3: 13,
        SCU4: 13,
        UNIT: "℃",
      },
      {
        name: "Stack-L Temperature #4",
        SCU1: 13,
        SCU2: 13,
        SCU3: 13,
        SCU4: 13,
        UNIT: "℃",
      },
      {
        name: "Stack-L Temperature #5",
        SCU1: 13,
        SCU2: 13,
        SCU3: 13,
        SCU4: 13,
        UNIT: "℃",
      },
      {
        name: "Stack-L Temperature #6",
        SCU1: 13,
        SCU2: 13,
        SCU3: 13,
        SCU4: 13,
        UNIT: "℃",
      },
      {
        name: "Stack-L Temperature #7",
        SCU1: 13,
        SCU2: 13,
        SCU3: 13,
        SCU4: 13,
        UNIT: "℃",
      },
      {
        name: "Stack-H Heating Pad Temperature #1",
        SCU1: 13,
        SCU2: 13,
        SCU3: 13,
        SCU4: 13,
        UNIT: "℃",
      },
      {
        name: "Stack-H Heating Pad Temperature #2",
        SCU1: 13,
        SCU2: 13,
        SCU3: 13,
        SCU4: 13,
        UNIT: "℃",
      },
      {
        name: "Stack-H Heating Pad Temperature #3",
        SCU1: 13,
        SCU2: 13,
        SCU3: 13,
        SCU4: 13,
        UNIT: "℃",
      },
      {
        name: "Stack-L Heating Pad Temperature #1",
        SCU1: 13,
        SCU2: 13,
        SCU3: 13,
        SCU4: 13,
        UNIT: "℃",
      },
      {
        name: "Stack-L Heating Pad Temperature #2",
        SCU1: 13,
        SCU2: 13,
        SCU3: 13,
        SCU4: 13,
        UNIT: "℃",
      },
      {
        name: "Stack-L Heating Pad Temperature #3",
        SCU1: 13,
        SCU2: 13,
        SCU3: 13,
        SCU4: 13,
        UNIT: "℃",
      },
      {
        name: "Stack-H H2 Tube Pressure",
        SCU1: 3,
        SCU2: 3,
        SCU3: 3,
        SCU4: 3,
        UNIT: "bar",
      },
      {
        name: "Stack-L H2 Tube Pressure",
        SCU1: 3,
        SCU2: 3,
        SCU3: 3,
        SCU4: 3,
        UNIT: "bar",
      },
    ],

    SPDU: [
      {
        text: "NAME",
        align: "left",
        sortable: false,
        value: "name",
      },
      { text: "SPDU1", value: "SPDU1", sortable: false },
      { text: "SPDU2", value: "SPDU2", sortable: false },
      { text: "UNIT", value: "UNIT", sortable: false },
    ],
    SPDU_detail: [
      {
        name: "F/W Version",
        SPDU1: 1.1,
        SPDU2: 1.1,
        UNIT: "N/A",
      },
      {
        name: "Status",
        SPDU1: 0,
        SPDU2: 0,
        UNIT: "N/A",
      },
      {
        name: "Error - warning",
        SPDU1: 0,
        SPDU2: 0,
        UNIT: "N/A",
      },
      {
        name: "Error - danger",
        SPDU1: 0,
        SPDU2: 0,
        UNIT: "N/A",
      },
      {
        name: "Error - fault",
        SPDU1: 0,
        SPDU2: 0,
        UNIT: "N/A",
      },
      {
        name: "Battery Input Voltage",
        SPDU1: 20,
        SPDU2: 20,
        UNIT: "V",
      },
      {
        name: "Battery Input Current",
        SPDU1: 20,
        SPDU2: 20,
        UNIT: "A",
      },
      {
        name: "Battery to TDU#1 Current",
        SPDU1: 20,
        SPDU2: 20,
        UNIT: "A",
      },
      {
        name: "Battery to TDU#2 Current",
        SPDU1: 20,
        SPDU2: 20,
        UNIT: "A",
      },
      {
        name: "Battery to MPDU CUrrent",
        SPDU1: 20,
        SPDU2: 20,
        UNIT: "A",
      },
      {
        name: "Converter Input(for charging) Voltage",
        SPDU1: 20,
        SPDU2: 20,
        UNIT: "V",
      },
      {
        name: "Converter Input(for charging) Current",
        SPDU1: 20,
        SPDU2: 20,
        UNIT: "A",
      },
      {
        name: "Battery Temperature #1",
        SPDU1: 13,
        SPDU2: 13,
        UNIT: "℃",
      },
      {
        name: "Battery Temperature #2",
        SPDU1: 13,
        SPDU2: 13,
        UNIT: "℃",
      },
      {
        name: "Battery Temperature #3",
        SPDU1: 13,
        SPDU2: 13,
        UNIT: "℃",
      },
      {
        name: "Battery Temperature #4",
        SPDU1: 13,
        SPDU2: 13,
        UNIT: "℃",
      },
      {
        name: "I/O Status",
        SPDU1: 0,
        SPDU2: 0,
        UNIT: "N/A",
      },
    ],

    CONVERTER: [
      {
        text: "NAME",
        align: "left",
        sortable: false,
        value: "name",
      },
      { text: "CONV1", value: "CONV1", sortable: false },
      { text: "CONV2", value: "CONV2", sortable: false },
      { text: "UNIT", value: "UNIT", sortable: false },
    ],
    CONVERTER_detail: [
      {
        name: "Status",
        CONV1: 0,
        CONV2: 0,
        UNIT: "N/A",
      },
      {
        name: "Stack1 Input Voltage",
        CONV1: 20,
        CONV2: 20,
        UNIT: "V",
      },
      {
        name: "Stack2 Input Voltage",
        CONV1: 20,
        CONV2: 20,
        UNIT: "V",
      },
      {
        name: "Stack1 Temperature",
        CONV1: 13,
        CONV2: 13,
        UNIT: "℃",
      },
      {
        name: "Stack2 Temperature",
        CONV1: 13,
        CONV2: 13,
        UNIT: "℃",
      },
      {
        name: "Battery Output Voltage (for Charging)",
        CONV1: 20,
        CONV2: 20,
        UNIT: "V",
      },
      {
        name: "Battery Output Current (for Charging)",
        CONV1: 20,
        CONV2: 20,
        UNIT: "A",
      },
      {
        name: "Pusher Output Voltage",
        CONV1: 20,
        CONV2: 20,
        UNIT: "V",
      },
      {
        name: "Pusher Output Current",
        CONV1: 20,
        CONV2: 20,
        UNIT: "A",
      },
    ],

    MPDU: [
      {
        text: "Name",
        align: "left",
        sortable: false,
        value: "name",
      },
      { text: "MPDU", value: "MPDU", sortable: false },
      { text: "UNIT", value: "UNIT", sortable: false },
    ],
    MPDU_detail: [
      {
        name: "MPDU F/W Version",
        MPDU: 1.1,
        UNIT: "N/A",
      },
      {
        name: "MPDU Status",
        MPDU: 0,
        UNIT: "N/A",
      },
      {
        name: "MPDU Error - warning",
        MPDU: 0,
        UNIT: "N/A",
      },
      {
        name: "MPDU Error - danger",
        MPDU: 0,
        UNIT: "N/A",
      },
      {
        name: "MPDU Error - fault",
        MPDU: 0,
        UNIT: "N/A",
      },
      {
        name: "MPDU Stack Path Voltage",
        MPDU: 20,
        UNIT: "V",
      },
      {
        name: "MPDU Stack Path Current",
        MPDU: 20,
        UNIT: "A",
      },
      {
        name: "MPDU Battery Path Voltage",
        MPDU: 20,
        UNIT: "V",
      },
      {
        name: "MPDU Battery Path Current",
        MPDU: 20,
        UNIT: "A",
      },
      {
        name: "Ambient Temperature",
        MPDU: 13,
        UNIT: "℃",
      },
      {
        name: "Ambient Humidity",
        MPDU: 10,
        UNIT: "%",
      },
      {
        name: "H2 Leakage",
        MPDU: 15000,
        UNIT: "ppm",
      },
      {
        name: "MPDU I/O Status",
        MPDU: 0,
        UNIT: "N/A",
      },
    ],

    // 기존 ant
    data,

    drone_info: localStorage.getItem("drone_info")
      ? JSON.parse(localStorage.getItem("drone_info"))
      : {
          id: "UA",
          approval_gcs: "MUV",
          host: "gcs.iotocean.org",
          drone: "KETI_Simul_1",
          gcs: "KETI_GCS",
          type: "ardupilot",
          systemid: "105",
          gcsip: "192.168.105.150",
        },

    id_rule: [(v) => !!v || "ID 값은 필수 입력사항입니다."],
    drone_rule: [(v) => !!v || "drone 값은 필수 입력사항입니다."],
    host_rule: [(v) => !!v || "host 값은 필수 입력사항입니다."],
    gcs_rule: [(v) => !!v || "GCS 값은 필수 입력사항입니다."],
    type_rule: [(v) => !!v || "type 값은 필수 입력사항입니다."],
    systemid_rule: [(v) => !!v || "system ID 값은 필수 입력사항입니다."],
    gcsip_rule: [(v) => !!v || "GCS IP 값은 필수 입력사항입니다."],

    altset: "",
    altset_rule: [
      (v) => !!v || "고도값은 필수 입력사항입니다.",
      (v) => /^[0-9]*$/.test(v) || "고도값은 숫자만 입력 가능합니다.",
    ],

    interval: {},

    myPan: 0,
    myTilt: 0,

    p_offset: 0,
    t_offset: 0,

    pPan: 0,
    nPan: 0,

    pTilt: 0,
    nTilt: 0,

    antTypeFlag: false,
    antTypeMsg: "",

    // mqtt 연결부
    client: {
      connected: false,
      loading: false,
    },
    connection: {
      host: localStorage.getItem("mobius-host")
        ? localStorage.getItem("mobius-host")
        : "",
      gcs: localStorage.getItem("mobius-gcs")
        ? localStorage.getItem("mobius-gcs")
        : "",
      drone: localStorage.getItem("mobius-drone")
        ? localStorage.getItem("mobius-drone")
        : "",
      port: 8883,
      endpoint: "",
      clean: true,
      reconnectPeriod: 2 * 1000,
      connectTimeout: 30 * 1000,
      queueQoSZero: false,
      clientId: "jiho_" + nanoid(15),
      username: "keti_muv",
      password: "keti_muv",
    },

    tr_client: {
      connected: false,
      loading: false,
    },
    tr_connection: {
      host: localStorage.getItem("mobius-host")
        ? localStorage.getItem("mobius-host")
        : "",
      gcs: localStorage.getItem("mobius-gcs")
        ? localStorage.getItem("mobius-gcs")
        : "",
      drone: localStorage.getItem("mobius-drone")
        ? localStorage.getItem("mobius-drone")
        : "",
      port: 8883,
      endpoint: "",
      clean: true,
      reconnectPeriod: 2 * 1000,
      connectTimeout: 30 * 1000,
      queueQoSZero: false,
      clientId: "jiho_" + nanoid(15),
      username: "keti_muv",
      password: "keti_muv",
    },
    getDroneDataTopic: "/Mobius/GcsName/Drone_Data/DroneName/Panel",
    TrCmdDataTopic: "/Mobius/GcsName/TrCmd_Data/DroneName/Panel",

    getDataTopic: {
      pantilt: "/Mobius/GcsName/Tr_Data/DroneName/pantilt",
    },

    motorControlTopic: "/Mobius/GcsName/Ctrl_Data/DroneName/Panel",
    offsetTopic: "/Mobius/GcsName/Offset_Data/DroneName/Panel",
    gpsControlTopic: "/Mobius/GcsName/Gps_Ctrl_Data/DroneName/Panel",
    altTopic: "/Mobius/GcsName/Alt_Data/DroneName/Panel",
    speedTopic: "/Mobius/GcsName/Speed_Data/DroneName/Panel",

    droneTopic: "/Mobius/GcsName/Drinfo_Data/Panel",

    curAlt: 0,
    offset_alt: 0.5,
    offset_alt_rule: [(v) => /^[.0-9]*$/.test(v) || "Only numbers."],

    snackbar: false,
    text: "",
    timeout: 3000,

    tr_state: "ready",
    gps_update: false,
    gps_update_msg: "RELEASE",
    set_gps_update_msg: "HOLD",
    ant_type: "T0",
    gps_fixed: "No GPS",

    tr_run_status: false,
    tr_arrange_status: false,

    mavlink_connect: false,

    tr_offset_alt: 0.5,
    motorSpeed: 0,
    tr_speed: 8.88,
    speedCount: 1,

    arrangeBtnMsg: "ARRANGE",
    runBtnMsg: "RUN",
    mSpeedMsg: "1x",

    dialog: false,
    dr_info_dialog: false,

    mavUdpComLink: {},
  };
},
methods: {
  savebtn() {
    console.log(JSON.stringify(this.drone_info));
    localStorage.setItem("drone_info", JSON.stringify(this.drone_info));
    this.doPublish(this.droneTopic, JSON.stringify(this.drone_info));
  },

  tiltUp() {
    this.doPublish(this.motorControlTopic, "tilt_up");
  },
  tiltUpStop() {
    this.doPublish(this.motorControlTopic, "stop");
  },
  tiltDown() {
    this.doPublish(this.motorControlTopic, "tilt_down");
  },
  tiltDownStop() {
    this.doPublish(this.motorControlTopic, "stop");
  },
  panDown() {
    this.doPublish(this.motorControlTopic, "pan_down");
  },
  panDownStop() {
    this.doPublish(this.motorControlTopic, "stop");
  },
  panUp() {
    this.doPublish(this.motorControlTopic, "pan_up");
  },
  panUpStop() {
    this.doPublish(this.motorControlTopic, "stop");
  },
  doRun() {
    this.doPublish(this.motorControlTopic, "run");
  },
  doArrange() {
    this.doPublish(this.motorControlTopic, "arrange");
  },
  doSetOffset() {
    this.doPublish(
      this.offsetTopic,
      JSON.stringify({
        p_offset: -1 * this.p_offset,
        t_offset: -1 * this.t_offset,
      })
    );
  },
  changeAntType() {
    this.antTypeFlag = !this.antTypeFlag;

    if (this.antTypeFlag) {
      this.antTypeMsg = "T0°";
      this.doPublish(this.offsetTopic, JSON.stringify({ type: "T90" }));
    } else {
      this.antTypeMsg = "T90°";
      this.doPublish(this.offsetTopic, JSON.stringify({ type: "T0" }));
    }
  },
  setbtn() {
    localStorage.setItem("mobius-host", this.connection.host);
    localStorage.setItem("mobius-gcs", this.connection.gcs);
    localStorage.setItem("mobius-drone", this.connection.drone);

    this.createConnection();
  },
  changeSpeed() {
    this.speedCount++;
    if (this.speedCount > 5) {
      this.speedCount = 1;
    }
    this.tr_speed = (8.88 * this.speedCount).toFixed(2);
    this.mSpeedMsg = this.speedCount.toString() + "x";

    this.doPublish(this.speedTopic, this.tr_speed.toString());
  },
  changeOffsetAlt() {
    this.doPublish(this.altTopic, this.offset_alt.toString());
  },
  GPS_hold_release() {
    if (this.gps_update) {
      this.doPublish(this.gpsControlTopic, "hold");
    } else {
      this.doPublish(this.gpsControlTopic, "release");
    }
  },
  createConnection() {
    if (this.client.connected) {
      this.destroyConnection();
    }

    if (!this.client.connected) {
      this.client.loading = true;
      this.connection.clientId = "mqttjs_" + "jiho" + "_" + nanoid(15);

      this.getDataTopic.pantilt =
        "/Mobius/" +
        this.connection.gcs +
        "/Tr_Data/" +
        this.connection.drone +
        "/pantilt";

      this.offsetTopic =
        "/Mobius/" +
        this.connection.gcs +
        "/Offset_Data/" +
        this.connection.drone +
        "/Panel";
      this.gpsControlTopic =
        "/Mobius/" +
        this.connection.gcs +
        "/Gps_Ctrl_Data/" +
        this.connection.drone +
        "/Panel";

      this.motorControlTopic =
        "/Mobius/" +
        this.connection.gcs +
        "/Ctrl_Data/" +
        this.connection.drone +
        "/Panel";
      this.altTopic =
        "/Mobius/" +
        this.connection.gcs +
        "/Alt_Data/" +
        this.connection.drone +
        "/Panel";
      this.speedTopic =
        "/Mobius/" +
        this.connection.gcs +
        "/Speed_Data/" +
        this.connection.drone +
        "/Panel";
      this.droneTopic =
        "/Mobius/" +
        this.connection.gcs +
        "/Drinfo_Data/" +
        this.connection.drone +
        "/Panel";

      console.log("Host is : " + this.connection.host);
      const { host, port, endpoint, ...options } = this.connection;
      const connectUrl = `ws://${host}:${port}${endpoint}`;
      try {
        this.client = mqtt.connect(connectUrl, options);

        this.client.on("connect", () => {
          console.log(connectUrl, "Connection succeeded!");

          this.client.connected = true;
          this.client.loading = false;

          this.doSubscribe(this.getDataTopic.pantilt);
        });

        this.client.on("error", (error) => {
          console.log("Connection failed", error);

          this.destroyConnection();
        });

        this.client.on("close", () => {
          console.log("Connection closed");

          this.destroyConnection();

          this.connection.clientId = "mqttjs_" + "jiho" + "_" + nanoid(15);
        });

        this.client.on("message", (topic, message) => {
          // console.log("Received " + message.toString() + " From " + topic);

          let topic_arr = topic.split("/");
          if (topic_arr[3] === "Tr_Data") {
            console.log(message.toString());
            let TrData = JSON.parse(message.toString());

            this.myPan = TrData.pan_angle.toFixed(1);
            this.myTilt = TrData.tilt_angle.toFixed(1);

            this.tr_offset_alt = TrData.offset_alt.toFixed(1);
            this.curAlt = TrData.alt.toFixed(2);

            this.tr_state = TrData.state.toString();
            if (this.tr_state === "arranging") {
              this.arrangeBtnMsg === "STOP";
              this.tr_arrange_status = true;
            } else if (this.tr_state === "run") {
              this.runBtnMsg === "STOP";
              this.tr_run_status = true;
            } else {
              this.arrangeBtnMsg === "ARRANGE";
              this.runBtnMsg === "RUN";
              this.tr_arrange_status = false;
              this.tr_run_status = false;
            }

            let motor_speed = parseFloat(TrData.speed).toFixed(2);
            if (this.motorSpeed !== motor_speed) {
              this.motorSpeed = motor_speed;
            }

            this.gps_update = JSON.parse(TrData.gps_update.toString());
            if (this.gps_update) {
              this.gps_update_msg = "RELEASE";
              this.set_gps_update_msg = "HOLD";
            } else {
              this.gps_update_msg = "HOLD";
              this.set_gps_update_msg = "RELEASE";
            }

            let fix_type = parseInt(TrData.fix_type);
            if (fix_type === mavlink.GPS_FIX_TYPE_NO_GPS) {
              //0 // No GPS connected
              this.gps_fixed = "NO_GPS";
            } else if (fix_type === mavlink.GPS_FIX_TYPE_NO_FIX) {
              //1 // No position information, GPS is connected
              this.gps_fixed = "NO_FIX";
            } else if (fix_type === mavlink.GPS_FIX_TYPE_2D_FIX) {
              //2 // 2D position
              this.gps_fixed = "2D_FIX";
            } else if (fix_type === mavlink.GPS_FIX_TYPE_3D_FIX) {
              //3 // 3D position
              this.gps_fixed = "3D_FIX";
            } else if (fix_type === mavlink.GPS_FIX_TYPE_DGPS) {
              //4 // DGPS/SBAS aided 3D position
              this.gps_fixed = "DGPS";
            } else if (fix_type === mavlink.GPS_FIX_TYPE_RTK_FLOAT) {
              //5 // RTK float, 3D position
              this.gps_fixed = "RTK_FLOAT";
            } else if (fix_type === mavlink.GPS_FIX_TYPE_RTK_FIXED) {
              //6 // RTK Fixed, 3D position
              this.gps_fixed = "RTK_FIXED";
            } else if (fix_type === mavlink.GPS_FIX_TYPE_STATIC) {
              //7 // Static fixed, typically used for base stations
              this.gps_fixed = "STATIC";
            } else if (fix_type === mavlink.GPS_FIX_TYPE_PPP) {
              //8 // PPP, 3D position.
              this.gps_fixed = "PPP";
            } else if (fix_type === mavlink.GPS_FIX_TYPE_ENUM_END) {
              //9 //
              this.gps_fixed = "ENUM_END";
            }

            this.ant_type = TrData.ant_type.toString();
            if (this.ant_type === "T0") {
              this.antTypeMsg = "T90°";
            } else if (this.ant_type === "T90") {
              this.antTypeMsg = "T0°";
            }

            if (this.myPan > 0) {
              this.pPan = (this.myPan / 360) * 100;
              this.pPan = parseInt(this.pPan);
              this.nPan = 0;
            } else {
              this.nPan = Math.abs(this.myPan);
              this.nPan = (this.nPan / 360) * 100;
              this.nPan = parseInt(this.nPan);
              this.pPan = 0;
            }

            if (this.myTilt > 0) {
              this.pTilt = (this.myTilt / 360) * 100;
              this.pTilt = parseInt(this.pTilt);
              this.nTilt = 0;
            } else {
              this.nTilt = Math.abs(this.myTilt);
              this.nTilt = (this.nTilt / 360) * 100;
              this.nTilt = parseInt(this.nTilt);
              this.pTilt = 0;
            }
          }
        });
      } catch (error) {
        console.log("mqtt.connect error", error);
        this.client.connected = false;

        setTimeout(this.createConnection, 2000);
      }
    }
  },

  doSubscribe(topic) {
    if (this.client.connected) {
      const qos = 0;
      this.client.subscribe(topic, { qos }, (error) => {
        if (error) {
          console.log("Subscribe to topics error", error);
          return;
        }

        console.log("Subscribe to topics (", topic, ")");
      });
    }
  },

  doPublish(topic, payload) {
    if (this.client.connected) {
      this.client.publish(topic, payload, 0, (error) => {
        if (error) {
          console.log("Publish error", error);
        }
      });
      console.log("publish", topic, payload);
    }
  },

  destroyConnection() {
    if (this.client.connected) {
      try {
        if (Object.hasOwnProperty.call(this.client, "__ob__")) {
          this.client.end();
        }
        this.client = {
          connected: false,
          loading: false,
        };

        this.mavUdpComLink[this.connection.drone].socket.close();

        this.tr_run_status = false;
        this.tr_arrange_status = false;
        this.curAlt = 0;
        this.offset_alt = 0;
        this.tr_state = "ready";
        this.gps_update = false;
        this.gps_update_msg = "RELEASE";
        this.ant_type = "T0";
        this.gps_fixed = "No GPS";
        this.myPan = 0;
        this.myTilt = 0;
        this.tr_speed = 0;
        this.motorSpeed = 8.88 * 4;
        this.arrangeBtnMsg = "ARRANGE";
        this.runBtnMsg = "RUN";
        this.mavlink_connect = false;
        this.dialog = false;
        this.dr_info_dialog = false;
        this.mavUdpComLink = {};
        console.log(
          this.connection.host + " - " + this.connection.gcs,
          "\nSuccessfully disconnected!"
        );
      } catch (error) {
        console.log("Disconnect failed", error.toString());
      }
    }
  },

  connectMAVLink() {
    this.mavlink_connect = !this.mavlink_connect;
    if (this.mavlink_connect) {
      this.tr_createConnection();
    } else {
      if (
        Object.prototype.hasOwnProperty.call(
          this.mavUdpComLink,
          this.connection.drone
        )
      ) {
        this.mavUdpComLink[this.connection.drone].socket.close();
      }
      this.tr_destroyConnection();
    }
  },
  createUdpCommLink(dName, port) {
    if (!Object.prototype.hasOwnProperty.call(this.mavUdpComLink, dName)) {
      let udpSocket = dgram.createSocket("udp4");

      udpSocket.id = dName;

      this.mavUdpComLink[dName] = {};
      this.mavUdpComLink[dName].socket = udpSocket;
      this.mavUdpComLink[dName].port = port;

      console.log("UDP socket created on port " + port + " [" + dName + "]");

      udpSocket.on("message", (msg) => {
        this.tr_doPublish(this.TrCmdDataTopic, msg);
      });

      udpSocket.on("close", () => {
        console.log("close");

        if (
          Object.prototype.hasOwnProperty.call(this.mavUdpComLink, this.id)
        ) {
          delete this.mavUdpComLink[this.id];
        }
      });
    }
  },
  tr_createConnection() {
    if (this.tr_client.connected) {
      this.tr_destroyConnection();
    }

    if (!this.tr_client.connected) {
      this.tr_client.loading = true;
      this.tr_connection.clientId = "mqttjs_" + "tr_" + nanoid(15);

      this.getDroneDataTopic =
        "/Mobius/" +
        this.connection.gcs +
        "/Drone_Data/" +
        this.connection.drone +
        "/Panel";
      this.TrCmdDataTopic =
        "/Mobius/" +
        this.connection.gcs +
        "/TrCmd_Data/" +
        this.connection.drone +
        "/Panel";

      console.log("Tracker host is : " + this.connection.host);
      if (this.connection.host.includes("192.168.")) {
        this.createUdpCommLink(this.connection.drone, 11000 + 254);

        const { host, port, endpoint, ...options } = this.tr_connection;
        const connectUrl = `ws://${host}:${port}${endpoint}`;
        try {
          this.tr_client = mqtt.connect(connectUrl, options);

          this.tr_client.on("connect", () => {
            console.log(connectUrl, "Connection succeeded!");

            this.tr_client.connected = true;
            this.tr_client.loading = false;

            this.tr_doSubscribe(this.getDroneDataTopic);
          });

          this.tr_client.on("error", (error) => {
            console.log("tr_Connection failed", error);

            this.tr_destroyConnection();
          });

          this.tr_client.on("close", () => {
            console.log("tr_Connection closed");

            this.tr_destroyConnection();

            this.tr_connection.clientId = "mqttjs_" + "tr_" + nanoid(15);
          });

          this.tr_client.on("message", (topic, message) => {
            // console.log("Received " + message.toString() + " From " + topic);

            let topic_arr = topic.split("/");
            if (topic_arr[3] === "Drone_Data") {
              if (
                Object.prototype.hasOwnProperty.call(
                  this.mavUdpComLink,
                  topic_arr[4]
                )
              ) {
                this.mavUdpComLink[topic_arr[4]].socket.send(
                  message,
                  this.mavUdpComLink[topic_arr[4]].port,
                  "localhost",
                  (error) => {
                    if (error) {
                      this.mavUdpComLink[topic_arr[4]].socket.close();
                      console.log(
                        "udpCommLink[" + topic_arr[4] + "].socket is closed"
                      );
                    }
                  }
                );
              }
            }
          });
        } catch (error) {
          console.log("tr_mqtt.connect error", error);
          this.tr_client.connected = false;

          setTimeout(this.tr_createConnection, 2000);
        }
      } else {
        this.text = "트래커와 이더넷으로 연결하세요.";
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, 3000);
      }
    }
  },

  tr_doSubscribe(topic) {
    if (this.tr_client.connected) {
      const qos = 0;
      this.tr_client.subscribe(topic, { qos }, (error) => {
        if (error) {
          console.log("tr_Subscribe to topics error", error);
          return;
        }

        console.log("tr_Subscribe to topics (", topic, ")");
      });
    }
  },

  tr_doPublish(topic, payload) {
    if (this.tr_client.connected) {
      this.tr_client.publish(topic, payload, 0, (error) => {
        if (error) {
          console.log("tr_Publish error", error);
        }
      });
      console.log("tr_publish", topic, payload);
    }
  },

  tr_destroyConnection() {
    if (this.tr_client.connected) {
      try {
        if (Object.hasOwnProperty.call(this.tr_client, "__ob__")) {
          this.tr_client.end();
        }
        this.tr_client = {
          connected: false,
          loading: false,
        };
        console.log(
          this.tr_connection.host + " - " + this.tr_connection.gcs,
          "\nSuccessfully tr_disconnected!"
        );
      } catch (error) {
        console.log("tr_Disconnect failed", error.toString());
      }
    }
  },
},
watch: {
  motorSpeed(nVal) {
    this.tr_speed = nVal;
    this.speedCount = Math.round(nVal / 8.88);
    this.mSpeedMsg = this.speedCount.toString() + "x";
  },
  tr_speed(nVal) {
    this.speedCount = Math.round(nVal / 8.88);
    this.mSpeedMsg = this.speedCount.toString() + "x";
  },
},
beforeDestroy() {
  this.destroyConnection();
},
};
</script>

<style lang="scss">



#app {
text-align: center;
color: rgb(255, 255, 255);
background: white;
display: flex;
justify-content: center;
align-items: center;
}

#inspire {
  background: #3596e4de;
  //background-image: url("../assets/line.jpg");
}

/*
.text-white input {
border-color: white;
text-align: center;
font-size: 25px;
letter-spacing: 5px;
color: white !important;
}
*/
.f0 {
text-align: left;
color: rgba(0, 0, 0, 0.635);
letter-spacing: 3px;
font-size: 20px;
}

.f1 {
text-align: center;
color: white;
letter-spacing: 5px;
font-size: 20px;
}

.f1aa {
text-align: start;
color: white;
letter-spacing: 5px;
font-size: 13px;
}

.f1aa-1 {
text-align: end;
color: white;
letter-spacing: 5px;
font-size: 13px;
}

.f1ab {
text-align: start;
color: white;
letter-spacing: 5px;
font-size: 10px;
}

.f1b {
text-align: center;
color: white;
letter-spacing: 5px;
font-size: 18px;
}

.f2 {
text-align: center;
color: white;
letter-spacing: 8px;
font-size: 20px;
}

.f3 {
text-align: center;
color: white;
letter-spacing: 3px;
font-size: 25px;
}

.f4 {
text-align: center;
color: white;
letter-spacing: 3px;
font-size: 32px;
}

.bt0 {
text-align: center;
color: rgba(0, 0, 0, 0.705);
letter-spacing: 2px;
font-size: 15px;
}

.bt1 {
text-align: center;
color: white;
letter-spacing: 2px;
font-size: 15px;
}

.bt2 {
text-align: center;
color: white;
letter-spacing: 2px;
font-size: 15px;
transform: rotate(90deg);
}

.bt3 {
text-align: center;
color: white;
letter-spacing: 2px;
font-size: 15px;
transform: rotate(270deg);
}

.b0 {
width: 100px;
min-width: 100px;
height: 88.5px;
min-height: 88.5px;
letter-spacing: 2px;
}

.z0 {
width: 50px;
min-width: 50px;
height: 50px;
min-height: 50px;
letter-spacing: 2px;
}

.z1 {
width: 30px;
min-width: 30px;
height: 50px;
min-height: 50px;
letter-spacing: 2px;
}

.b0d {
width: 100px;
min-width: 100px;
height: 44px;
min-height: 44px;
letter-spacing: 2px;
}

.b0a {
width: 100px;
min-width: 100px;
height: 88px;
letter-spacing: 2px;
}

.bb {
width: 50px;
min-width: 50px;
height: 50px;
min-height: 50px;
}

.sb {
color: white;
width: 50px;
min-width: 50px;
height: 50px;
min-height: 50px;
}

.b1 {
width: 170px;
min-width: 170px;
height: 200px;
min-height: 200px;
}

.b3 {
width: 200px;
min-width: 200px;
height: 200px;
min-height: 200px;
transform: rotate(270deg);
}

.b4 {
width: 200px;
min-width: 200px;
height: 200px;
min-height: 200px;
transform: rotate(90deg);
}

.v1 {
width: 200px;
height: 200px;
min-width: 200px;
max-width: 200px;
min-height: 200px;
max-height: 200px;
}

.v-text-field input {
font-size: 15px;
}

.centered-input input {
text-align: end;
}
</style>
