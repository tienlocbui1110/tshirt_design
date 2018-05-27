/* eslint-disable object-shorthand */
/* global Chart, CustomTooltips, getStyle, hexToRgba */

/**
 * --------------------------------------------------------------------------
 * CoreUI Free Boostrap Admin Template (v2.0.0-rc.1): main.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers */
// Disable the on-canvas tooltip
Chart.defaults.global.pointHitDetectionRadius = 1;
Chart.defaults.global.tooltips.enabled = false;
Chart.defaults.global.tooltips.mode = "index";
Chart.defaults.global.tooltips.position = "nearest";
Chart.defaults.global.tooltips.custom = CustomTooltips;

// eslint-disable-next-line no-unused-vars
if ($("#main-chart").length !== 0) {
  const mainChart = new Chart($("#main-chart"), {
    type: "line",
    data: {
      labels: [
        "M",
        "T",
        "W",
        "T",
        "F",
        "S",
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S",
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S",
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S",
        "S"
      ],
      datasets: [
        {
          label: "Số lượng truy cập",
          backgroundColor: "transparent",
          borderColor: getStyle("--info"),
          pointHoverBackgroundColor: getStyle("--info"),
          borderWidth: 2,
          data: [
            165,
            180,
            170,
            269,
            277,
            357,
            125,
            165,
            172,
            191,
            173,
            138,
            155,
            389,
            250,
            161,
            165,
            163,
            160,
            185,
            425,
            196,
            183,
            264,
            137,
            495,
            112,
            575
          ]
        },
        {
          label: "SL Mua hàng",
          backgroundColor: hexToRgba(getStyle("--info"), 10),
          borderColor: getStyle("--success"),
          pointHoverBackgroundColor: getStyle("--success"),
          borderWidth: 2,
          data: [
            33,
            44,
            55,
            52,
            10,
            92,
            33,
            82,
            87,
            98,
            93,
            83,
            87,
            98,
            96,
            84,
            97,
            86,
            94,
            86,
            95,
            91,
            98,
            91,
            66,
            80,
            83,
            182
          ]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              drawOnChartArea: false
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              stepSize: Math.ceil(300 / 5)
            }
          }
        ]
      },
      elements: {
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3
        }
      }
    }
  });
}

$(function() {
  if ($("#datepicker1").length !== 0)
    $("#datepicker1")
      .datepicker({
        autoclose: true,
        todayHighlight: true
      })
      .datepicker("update", new Date(2010, 0, 1));

  if ($("#datepicker2").length !== 0)
    $("#datepicker2")
      .datepicker({
        autoclose: true,
        todayHighlight: true
      })
      .datepicker("update", new Date());
  if ($("#coupon-expire").length !== 0)
    $("#coupon-expire")
      .datepicker({
        autoclose: true,
        todayHighlight: true
      })
      .datepicker("update", new Date());
});
