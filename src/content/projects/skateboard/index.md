---
title: Custom Electric Skateboard
summary: >-
  Designed and built a dual-BLDC electric skateboard from scratch.
  12S4P Li-ion pack, dual VESC motor controllers linked via CAN bus
  for synchronized torque delivery and real-time telemetry.
cover: { src: ./skateboard_cover.jpeg, alt: Electric Skateboard }
tags: [Power Electronics, Firmware, CAN]
order: 1
github: https://github.com/evanapplebaum

# ---------- Detail page ----------
detail: true
heading: [Electric, Skateboard]
meta:
  - { label: Type, value: Personal Build }
  - { label: Domain, value: Power Electronics · Firmware · Fabrication }
  - { label: Status, value: Complete ✓ }
techTags: [BLDC Control, CAN Bus, UART, VESC]
otherTags: [Li-Ion Pack Design, Carbon Fiber, Cell Spot Welding, BMS, 3D Printing]
hero: { src: ./skateboard_wideshot.jpeg, alt: Electric Skateboard }

stats:
  - { value: 7 kW, label: Peak Power Output }
  - { value: 90+ km/h, label: Top Speed }
  - { value: 45 km, label: Range }
  - { value: 3.4s, label: 0–40 km/h }

specs:
  - section: Battery Pack
    rows:
      - [Cell, Molicel P42A 21700]
      - [Configuration, 12S4P]
      - [Nominal Voltage, 43.2V (50.4V fully charged)]
      - [Capacity, 16.8Ah / ~725Wh]
      - [Max Discharge, 180A continuous (45A/cell × 4P)]
      - [BMS, "Bluetooth, 100A cont. / 200A peak"]
      - [Active Balancing, Yes — per-cell voltage monitoring]
  - section: Motors
    rows:
      - [Model, 6368 BLDC Sensored]
      - [KV Rating, 190 KV]
      - [Power (each), 3500W]
      - [Max Current, 80A]
      - [Sensing, Hall effect sensors]
      - [Connectors, 4mm bullet]
  - section: Electronics
    rows:
      - [ESC, GoFOC MakerX DV6 (dual)]
      - [ESC Current (each), 100A continuous]
      - [Motor Control Mode, FOC (Field-Oriented Control)]
      - [Inter-ESC Comms, CAN bus (master/slave)]
      - [Remote Comms, UART]
      - [Telemetry, VESC Tool over Bluetooth + CAN]
  - section: Drivetrain & Build
    rows:
      - [Drive Config, Belt-driven RWD]
      - [Wheels, 7" off-road pneumatic]
      - [Deck, Longboard — painted w/ hand-cut stencils]
      - [Enclosure, Custom vacuum-infused carbon fiber]

feature:
  label: Internals
  title: Inside the Build
  image: { src: ./skateboard_internals.jpeg, alt: Skateboard internals }
  caption: >-
    12S4P Molicel P42A pack, GoFOC DV6 dual ESC, BMS with Bluetooth,
    and 4mm bullet connectors — all mounted on a carbon fiber deck.

gallery:
  - { src: ./skate-0.JPG, alt: Battery pack close-up showing 12S4P cell arrangement and BMS wiring, position: center 60% }
  - { src: ./skate-1.JPG, alt: "Close up of nickel strip spot welds on battery pack, showing sense wires soldered to each cell group" }
  - { src: ./skate-2.PNG, alt: Bluetooth BMS app showing cell voltages, position: center top }
  - { src: ./skate-3.JPG, alt: "View of the finished board from the rear, showing the dual motors final connections", position: center 75% }
  - { src: ./skate-4.jpeg, alt: View of the carbon fiber enclosure before trimming }
  - { src: ./skate-5.JPG, alt: View of the original board finish before painting with stencils }

challenges:
  - title: Battery Pack Construction
    body: >-
      Spot welding 48 cells into a **12S4P configuration** required precision —
      poor welds mean high resistance, heat, and potential thermal runaway. Learned to use
      0.1mm nickel strip and calibrate weld pulse energy for consistent, low-resistance joins.
      Each of the 12 cell groups required individual sense wires soldered directly to the nickel,
      feeding into the BMS for per-cell voltage monitoring and active balancing.
  - title: Dual Motor Synchronization over CAN
    body: >-
      Running two independent BLDC motors on rear wheels requires tight torque matching —
      any imbalance causes yaw and makes the board unpredictable at speed.
      Configured the **GoFOC DV6 in master/slave mode over CAN bus**,
      where the master ESC receives throttle input via UART from the remote and
      replicates the torque command to the slave in real time.
      VESC Tool's live telemetry was used to verify current balance between channels.
  - title: Carbon Fiber Enclosure
    body: >-
      The original wooden enclosure (built with my grandfather) wasn't rigid or weatherproof enough
      for the loads involved. After learning **vacuum-infused carbon fiber lamination**,
      I 3D printed a male mold of the enclosure geometry, laid carbon fiber cloth over it,
      and used a vacuum bag and resin infusion to produce a lightweight, stiff, sealed enclosure.
      First attempt had a resin dry spot — second pull came out clean.
---

A fully custom electric longboard built from the ground up — battery pack, enclosure, motor controllers,
and drivetrain. The goal was to build something that performed at a serious level while designing and
fabricating as much as possible from scratch, rather than buying a prebuilt solution.

The final build runs **dual 3500W BLDC motors** on the rear wheels (belt-driven RWD),
controlled by a **GoFOC MakerX DV6 dual ESC** operating in Field-Oriented Control mode.
The two ESC channels are synchronized over **CAN bus** in a master/slave configuration,
with the wireless remote communicating to the master over **UART**.
A custom **12S4P Molicel P42A Li-ion pack** with a Bluetooth-enabled BMS supplies the power.
The original battery enclosure was crudely made from wood - the final revision is hand-laid **vacuum-infused carbon fiber**.
