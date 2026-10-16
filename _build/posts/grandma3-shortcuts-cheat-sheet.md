---
title: grandMA3 speed programming cheat sheet
description: The grandMA3 v2.5 keys, double presses and command-line syntax for fast programming and playback, grouped by workflow. Includes what is new from v2.0 to v2.5.1.1.
date: 2026-10-16
time: 15:10
tag: grandMA3
lead: Every key combo and command-line trick from the grandMA3 v2.5 manual and the latest release notes (2.5.1.1, 7 Oct 2026), on one page. Print it with Ctrl+P.
---

- `Key + Key` = hold the first, press the second. `2×` = press twice. `MA` = the MA key (on onPC: **Shift**).
- Any keyword can be shortened: `Store Sequence 8 Cue 20 /Overwrite` = `S Seq 8 Cue 20 /O`.
- Keywords are not case-sensitive; names in quotes are.
- Items marked with a version (e.g. **2.5**) need that version or newer.

## 1. Command line and key presses

| Keys / syntax | Does |
| --- | --- |
| Please (PC: Enter) | Run the command; empty line = activate all attributes of selection |
| MA + Please | Focus the command line |
| Oops (Ctrl+Z) | Undo last operation |
| Esc | Drop unexecuted command, close pop-up |
| Clear 1× / 2× / 3× | Deselect / deactivate values / empty programmer |
| Hold Clear | ClearAll at once |
| Off Off | Off menu (2.2+: clears command line) |
| At 2× | Normal level (runs at once) |
| MA + At / MA + At At | Integrate / Extract |
| Hold At | At Filter |
| `+ +` / `- -` | Dimmer +10% / -10% |
| `. .` / MA + . | Zero / Default |
| MA + / | Wildcard `*` (e.g. `Group "Mac*"`) |
| If 1× / 2× / 3× / 4× | IfOutput / IfActive / IfProg / If |
| Fixture 2× | Selection |
| Channel 2× | Generic |
| Group 2× / 3× | World / Filter |
| Preset 2× / 3× | Attribute / Gel |
| MA + Preset | FeatureGroup |
| On 2× | Call |
| Edit 2× | EditSetting |
| Delete 2× / 3× | Remove / Release |
| Copy 2× / 3×, MA + Copy | Paste / Insert, Cut |
| Assign 2×, MA + Assign | Label, Set |
| MA + Update | Cook |
| MA + 8 / 2 / 4 / 6 | Cursor up / down / left / right |
| Help, then tap anything | Help for that item; `Help Please` = search |
| Hold MA + Esc 5 s | Cancel a long operation |

## 2. Selecting and MAtricks

| Keys / syntax | Does |
| --- | --- |
| `Fixture 1 Thru 10 - 6 Thru 8` | Range minus a range |
| `Fixture 1 Thru 5 + 9 Thru 10` | Two ranges |
| `+ Fixture 5 Thru 7` / `- Fixture 5 Thru 7` | Add to / remove from current selection |
| `Fixture Thru` / `Fixture Thru .` | All fixtures / all fixtures and subfixtures |
| `Fixture 301.` | Fixture and all its subfixtures |
| `Fixture 301.1. Thru 4 + 6` | Only pixels 4 and 6 |
| `Group 3 If Group 5` | Only fixtures in both groups |
| Next / Prev | Step through selected fixtures one by one |
| MA + Next / MA + Prev | Next / previous MAtricks step |
| Set key | MAtricks on / off |
| `Set Selection MAtricks "XGroup" 2` | Odd / even (2 groups); Next/Prev toggles them |
| `Set Selection MAtricks "XBlock" 2` | Pairs of fixtures |
| `Set Selection MAtricks "XWings" 2` | Mirror from both ends (symmetric looks) |
| `Set Selection MAtricks "XShuffle" 4` | Random order |
| `Reset Selection MAtricks` | Reset MAtricks |
| `Store MAtricks 5` / `Call MAtricks 5` | Save / recall a MAtricks setup |
| Align (hold = reset) | Fan modes: / < > >< <> |
| MA + Align | Align transition mode |
| Highlight / MA + Highlight | Highlight / Lowlight |
| Solo | Others to zero |
| Selection grid: Shift + arrows | Size a rectangle |
| Selection grid: Off + tap | Knock out that fixture |
| `Grid 2/2 Thru 4/4` | Select by grid position |

## 3. Values, presets and timing

| Keys / syntax | Does |
| --- | --- |
| `At 75` / `Full` / `Zero` | Dimmer 75 / full / zero |
| `At 5` (single digit input) | 50% |
| `At + 10` / `At - 10` | Relative change (space after the sign) |
| `At Cue 3` | Take the values from cue 3 |
| `Attribute "Pan" At 20` | One attribute |
| `At Preset 4.3` | Preset 3 of feature group 4 |
| `SelFix Preset 1.5` | Select fixtures used in that preset |
| `Group 8 At Preset 2.4` | Apply preset to a group |
| `At 50 Fade 2` | Level with 2 s fade |
| `Delay 4` | 4 s delay |
| Time key / MA + Time | Cycle Fade, Delay / Relative, Absolute |
| `At 50` then Time | Cycle value layer (e.g. `At 50 Fade`) |
| `At Speed Hz 70` | Phaser speed |
| `At Phase 0 Thru 360` | Spread phase across selection |
| `At Transition 0 + Width 50` | PWM-style step |
| Hold MA + Phaser key | Phaser editor |
| `KnockOut Fixture 2 + 4` | Remove fixtures from programmer |
| `Fixture 1 At Default` | Default values |
| `Highlight` / `Store Highlight` | Highlight / store highlight values |

## 4. Store, update, copy, delete

| Keys / syntax | Does |
| --- | --- |
| Store, Please | New cue in the selected sequence |
| Store + executor key | Store into that executor (empty = new sequence) |
| Hold Store | Store Settings (merge/overwrite default, cue only, tracking shield) |
| `Store Cue 42 "Name"` | Store and label in one go |
| `Store Cue 1 Thru 10 + 20 Thru 30` | Store ranges |
| `Store Cue + 0.1` / `Store Cue Next` | Relative cue number |
| `Store Sequence 4 Cue 1.2` | Store into a named sequence |
| `Store Cue 4 Time 6 Time 1` | Store with CueFade 6, CueDelay 1 |
| `/Merge` `/Overwrite` `/Remove` (`/M` `/O` `/R`) | Store options |
| `/CueOnly` / `/CueOnly "DimmerOnly"` | Don't track into the next cue |
| `Store Cue "BO*" /Merge` | Merge into every cue whose label starts with BO |
| Update (key flashes when possible) | Update menu: tap a cue to update it |
| `Update Preset 4.1` / `Update Cue - 1` | Update a preset / the previous cue |
| MA + Update | Cook (recipes, no editor) |
| `Copy Group 1 Thru 3 At 11` | Copy a range |
| `Copy Cue 2 At 6` | Copy cue |
| Copy 2× / Copy 3× / MA + Copy | Paste / Insert / Cut |
| `Move Macro 1 At 3` | Move (others shift along) |
| `Delete Cue 2.5` / Delete 2× / 3× | Delete / Remove / Release |
| `Release Attribute "Pan"` | Release values in programmer |
| Hold Oops | Oops history window |
| `Assign Appearance 1 At Sequence 2 + 3 + 4` | Assign to several objects |
| `Label Fixture 1 Thru 10 "Mac700 1"` | Auto-numbered labels |
| Edit 2× / MA + Edit | EditSetting / Edit recipe |

## 5. Sequences, executors and playback

| Keys / syntax | Does |
| --- | --- |
| Go+ / Go- / Pause (large keys) | Selected sequence: next / previous / pause |
| MA + Go+ (large) | Go+ on the loaded cue |
| `Go+ Executor 101` | Go on a specific executor |
| `Goto Cue 10 Executor 201 Fade 2` | Jump to a cue with your own fade |
| `Goto Cue Next` / `Goto Sequence 42 Cue Previous` | Relative jumps |
| Goto 2× (`Load Cue 3`) | Preload the next cue |
| `<<< Cue 5` / `>>> Cue 5` | Jump using playback timings, not cue times |
| MA + Go- | Top: back to first cue |
| MA + Go- Go- | Kill: Go here, all other playbacks off |
| MA + Go+ | Temp: on while held |
| MA + Go+ Go+ | Toggle on / off |
| MA + >>> | Flash: full while held, no fade |
| `Swap Sequence 5` | Play this, pull other dimmers down |
| `Off Sequence 1` / `Off Loaded` | Switch playback off |
| Off 2× | Off menu (see and switch off what is running) |
| Pause 2× / MA + Pause | Park / Fix |
| MA MA + Pause | Desk lock |
| Hold Learn + tap executor in tempo | Learn phaser speed |
| MA + Learn (`Rate1 Executor 105`) | Rate back to 1:1 |
| `Master 3.1 At BPM 120` | Set a speed master |
| `Select Executor 105` / Select + exec key | Make it the selected sequence |
| Assign + function + exec key | Set what an executor key does |
| `Assign Sequence 4 At Page 2.301` | Put a sequence on an executor |
| Page+ / Page- (hold Page- = page 1) | Change page |
| `Freeze`, `Blind`, `Preview` | Programmer priority / no output / preview mode |

## 6. Windows and PC keyboard (onPC)

| Keys | Does |
| --- | --- |
| Shift | Works as the MA key |
| Enter | Please |
| F1 | At Filter |
| F2 | Menu |
| F3 | Command section menu |
| F4 | Master controls |
| F5 | Playback menu |
| F7 | Custom master section |
| F8 | Encoder bar menu |
| F9 | Desk lock |
| F10 | Keyboard shortcuts on / off (label yellow = on) |
| Ctrl + C / V / X | Copy / paste / cut in a grid |
| Insert / Ctrl + Insert / Delete | Insert / store / delete at selected grid item |
| Ctrl + Enter | Edit pop-up for selected cell |
| Ctrl + N | Toggle the new-object line |
| Arrow keys | Move cursor / selection grid cursor |
| Double-tap a title bar | Maximise window |
| Hold MA | Show pool IDs on view buttons |
| `Locate Group 3` (2.5) | Jump to that pool object |

Your own key mapping: `List KeyboardShortcut`, or Load Defaults in the shortcut settings.

## 7. Cue timing, patch and macros

| Keys / syntax | Does |
| --- | --- |
| `Cue 1 Thru 4 CueFade 5` | Fade time on several cues |
| `CueFade 6/12` / `CueFade 3/` | In/out fade / change in-fade only |
| `Cue 1 Thru 4 CueDelay 5` | Cue delay |
| `Store Sequence 5 Cue 3 CueFade 7/11` | Store with timing |
| `Cue 3` | Select the fixtures used in cue 3 |
| `Patch Fixture 2 3.123` | Patch to universe 3 address 123 |
| `Patch Fixture 1 Thru 10` | Open Edit Patch for a range |
| `Macro 5` / `Store Macro 2` | Run / store a macro |
| `Off Sequence 5; Delete Group 3` | Several commands on one line |
| MA + X1 X1 (`Recast Preset 21.1`) | Push preset changes into cues using it |
| `Cook Preset 1.1` | Cook recipes without the editor |
| `AutoCreate FixtureType 13 At Group 21 /OddEven` (2.3) | Auto odd/even groups |

## 8. New speed tricks in v2.0 to v2.5

| Version | Keys / syntax | Does |
| --- | --- | --- |
| 2.5 | `Locate Group 3` (again = next place) | Jump to where a pool object sits |
| 2.5 | `Locate Page 1.201` / `Locate Reset` | Show an executor's object / go back |
| 2.5 | Hold List + tap object | Same as Locate |
| 2.5 | `FaderMaster Group * At 100` | Set group masters from the command line |
| 2.5 | Hold Group | Masters window (group, world, speed, playback, timing) |
| 2.5 | Flash / Black / Swap / Temp + hold a pool object | Use that action on pool objects, not just executors |
| 2.5 | Press MA | Show index numbers on pool-style executors |
| 2.4 | `At NShot 3` | Phaser runs 3 times |
| 2.4 | `Fixture 1 At Preset 4.1 /Universal` | Call a preset in universal / global / selective mode |
| 2.4 | Preview key + sequence; Preview twice; Preview + Off | Preview a sequence / switch live-preview / leave preview |
| 2.3 | `Learn` + tap executor | Set phaser speed and start by tapping |
| 2.3 | `FastSync` / `ReSync` | Resync phasers at once / gradually |
| 2.3 | `Store Cue + 0.1`, `Store Cue Next 2`, MA + / MA - | Relative cue numbers |
| 2.3 | `Copy Cue 21 At Cue +` | Copy and auto-number between cues |
| 2.3 | `AutoCreate FixtureType 13 At Group 21 /OddEven` | Make odd/even groups automatically |
| 2.2 | MA + Edit + Please / `EditRecipe Cue 1` | Open the recipe editor |
| 2.2 | `Store Group` (no number) | Store in first free slot |
| 2.2 | `Assign Appearance 1 At Sequence 1 + 2 + 3` | Assign to many targets at once |
| 2.2 | Ctrl+Z / Off Off / double-tap title bar | Oops / clear command line / maximise window |
| 2.1 | `Help Please` / Help twice | Search help / reopen last article |
| 2.1 | Hold MA + Esc for 5 s | Cancel a long operation |
| 2.0 | `At 5` (single digit input) | 50% |
| 2.0 | `/CueOnly "DimmerOnly"`, `/TrackingShield` | Protect later cues from tracking changes |
| 2.0 | `AutoCreate Universal 1 At Preset 1.11 "DimmerIncrement" 25` | Build dimmer presets in steps of 25% |
| 2.0 | Off + tap in Selection Grid | Knock out that fixture |
| 2.0 | Long-press an attribute / a fixture ID | Calculator / jump to patch |

**Before updating to 2.5:** OSC uses `;` between sequence name and cue, shape pool moved (update macros), and onPC now needs Vulkan graphics.

## Sources and caveats

- No default onPC key table exists in the online help; the F-keys above are the framework shortcuts. Check yours with `List KeyboardShortcut`.
- grandMA2 keywords like `MAtricksInterleave` don't exist in grandMA3; use `Set Selection MAtricks "XGroup" 2`.
- The manual disagrees on whether one Learn press enters Learn or LearnSpeed. Test on your desk.

Manual (v2.5): [Command syntax](https://help.malighting.com/grandMA3/2.5/HTML/csk_syntax_rules.html) · [Keys](https://help.malighting.com/grandMA3/2.5/HTML/keys.html) · [Store](https://help.malighting.com/grandMA3/2.5/HTML/keyword_store.html) · [Update](https://help.malighting.com/grandMA3/2.5/HTML/keyword_update.html) · [MAtricks](https://help.malighting.com/grandMA3/2.5/HTML/keyword_matricks.html) · [Select fixtures](https://help.malighting.com/grandMA3/2.5/HTML/operate_select_fixtures.html) · [Cue playback](https://help.malighting.com/grandMA3/2.5/HTML/cue_playback.html) · [Framework shortcuts](https://help.malighting.com/grandMA3/2.5/HTML/do_shortcuts_framework.html)

Release notes: [2.5 features](https://help.malighting.com/grandMA3/2.5/HTML/rn_features-2-5.html) · [2.5.1.1](https://help.malighting.com/grandMA3/2.5/HTML/rn_bug_fix_version-2-5-1-1.html) · [2.4 features](https://help.malighting.com/grandMA3/2.5/HTML/rn_features-2-4.html)

grandMA3 is a trademark of MA Lighting. This sheet is an independent summary and is not affiliated with MA Lighting.

