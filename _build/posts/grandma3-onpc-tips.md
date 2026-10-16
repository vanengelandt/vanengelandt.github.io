---
title: grandMA3 onPC: keys, setup and tips
description: What is different when you run grandMA3 on a PC or Mac: which hardware you need for output, the v2.5 system requirements, how the keyboard works and tips to program faster.
date: 2026-10-16
time: 15:05
tag: grandMA3
lead: grandMA3 onPC is the full console software on your own computer. It is great for pre-programming and busking, but a few things work differently from a real desk. Here is what I keep in mind, based on the v2.5 manual.
---

## 1. Output: you need MA hardware

On its own, onPC is perfect for building a show, previewing and working with a visualiser. To send light to a real rig, you connect one of the grandMA3 onPC products. All of them unlock the full software; they differ in how many outputs you get.

| Product | What it adds |
| --- | --- |
| onPC DMX-key / DMX-key starter | Two DMX outputs in a compact USB key |
| onPC xPort Nodes | Network output (MA-Net3, MA-Net2, sACN, Art-Net), RDM, colour display |
| onPC command wing | Real keys and encoders, the mobile setup |
| onPC command wing XT | Command wing with a built-in MA motherboard |
| onPC fader wing | Extra faders for playback |

## 2. Will my computer run v2.5?

Version 2.5 moved its graphics to **Vulkan**, so check your graphics card before you update.

| Part | Minimum | Recommended |
| --- | --- | --- |
| Windows | Windows 10 (1803+) or 11 (21H2+), 64-bit | |
| Mac | macOS Sonoma (14) or newer, Apple M1 or later (8+ cores) | |
| Processor (Windows) | 6th gen Intel Core, 4+ cores, or similar AMD with AVX2 | More cores beat higher clock speed |
| Memory | 8 GB | 16 GB (and at least 16 GB when you connect to real consoles) |
| Graphics (Windows) | Vulkan 1.3, 2 GB video memory | 4 GB video memory, latest driver |
| Storage | 32 GB free | SSD |
| Screen and network | 1920 x 1080, gigabit network card | |

On macOS Monterey or Ventura you stay on onPC 2.4.2.2. Windows on ARM is not supported.

## 3. How the keyboard works

| Key | Does |
| --- | --- |
| Shift | Works as the MA key (Shift + Update = Cook, Shift + Go- = Top) |
| Enter | Please |
| F10 or the ShCuts button | Keyboard shortcuts on (yellow) / off (white); red = a menu paused them |
| F1 | At Filter |
| F2 | Menu |
| F4 | Master controls |
| F5 | Playback menu |
| F8 | Encoder bar menu |
| F9 | Desk lock |
| Ctrl + C / V / X | Copy / paste / cut in a grid |
| Insert / Ctrl + Insert / Delete | Insert / store / delete at the selected grid item |
| Arrow keys | Move the cursor and the selection grid cursor |

**Finding the default letter shortcuts:** MA does not publish the list. With shortcuts on (F10), every key's shortcut shows in **lavender** on the command and playback keys. The full list is in Preferences and Timings → Keyboard Shortcuts, or type `List KeyboardShortcut`. **Load Defaults** brings back the factory set.

Shortcuts are saved per user profile. You can add your own (for example one key per executor) and export them to take to another computer.

## 4. Tips to work faster on onPC

1. **Turn shortcuts off while typing names** (F10), or letter keys fire commands.
2. **Type, don't click.** Keywords can be shortened: `S Seq 8 Cue 20 /O` is `Store Sequence 8 Cue 20 /Overwrite`.
3. **Use two screens.** Pools and playbacks on one, programmer and command line on the other.
4. **Add physical faders.** A fader wing or a MIDI controller makes busking feel like a real desk.
5. **Program in Preview or Blind** while a show is running, so you never touch the live output by accident.
6. **Keep your graphics driver up to date.** MA recommends always using the latest one.

All the command-line tricks are in my [grandMA3 speed programming cheat sheet](grandma3-shortcuts-cheat-sheet.html).

## Sources

[onPC overview](https://help.malighting.com/grandMA3/2.5/HTML/onpc.html) · [onPC system requirements](https://help.malighting.com/grandMA3/2.5/HTML/onpc_system_requirements.html) · [Keyboard shortcuts](https://help.malighting.com/grandMA3/2.5/HTML/do_shortcuts_keyboard.html) · [Framework shortcuts](https://help.malighting.com/grandMA3/2.5/HTML/do_shortcuts_framework.html)

grandMA3 is a trademark of MA Lighting. This post is an independent summary and is not affiliated with MA Lighting.
