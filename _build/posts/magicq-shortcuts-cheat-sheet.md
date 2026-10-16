---
title: MagicQ speed programming cheat sheet
description: About 200 ChamSys MagicQ shortcuts and keypad syntax for fast programming and busking, grouped by workflow. Covers stable 1.9.8.3 and beta 1.9.9.0.
date: 2026-10-16
tag: ChamSys MagicQ
lead: Every shortcut and keypad trick from the MagicQ manual and the latest release notes, on one page. Covers stable **1.9.8.3** (27 May 2026) and beta **1.9.9.0** (22 Sep 2026). Print it with Ctrl+P.
---

- `+` between keys = hold the first, press the second. `S` = a playback's SELECT button.
- On PC: `>` = THRU, `#` = FULL. SHIFT/CTRL on your keyboard work like the console buttons.
- Keypad level/time syntax with `/` needs Setup option **Auto Enter on Keypad Intensity Set = No**.
- Items marked **(1.9.8+)** or **(1.9.9 beta)** only work on that version or newer.

## 1. Selecting

| Keys | Does |
| --- | --- |
| `1 THRU 4 + 8 THRU 11 ENTER` | Select ranges; `- 7` removes a head |
| `1 THRU ENTER` | All heads of the same type upward from 1 |
| `101 @@` | Select head 101 whatever the setup |
| `0 ENTER` | Deselect all |
| `GROUP 1 THRU 4 - 3 ENTER` | Select groups by number |
| `name **` | Select group by (part of) its name |
| `GROUP 1 * 2 ENTER` | AND ONLY: heads in both groups |
| SHIFT + touch head/group | Toggle in/out of selection |
| ALL (nothing selected) | Reselect heads from the last CLEAR |
| SHIFT + ALL | All heads of the last type selected |
| ALT + ALL | All heads of the selected type, or snap colour (manual says both; test it) |
| CTRL + ALL | All heads active in the programmer |
| Hold ALL + palette / `50 ENTER` / `@ 60 ENTER` / S | Reselect heads using that palette / at 50%+ / at exactly 60% / in that playback step |
| Hold ALL | Selection order toolbar (normal, reverse, centre in/out) |
| SHIFT + RANDOM SELECT | Shuffle selection order |
| NEXT HEAD / PREV HEAD | Single mode, one head at a time; ALL exits |
| SHIFT + SINGLE | PAIR mode (symmetric pairs) |
| ODD/EVEN, then NEXT HEAD | Odds, then evens |
| Hold ODD/EVEN (PC: SHIFT + ODD/EVEN) | Toolbar: 3s, 4s, segments, groups, chunks, col tags |
| `1+2 NEXT HEAD` / `3 THRU 5 NEXT HEAD` | Sub-select by position in the selection |
| `0 NEXT HEAD` | Invert the sub-selection |
| Hold NEXT HEAD + palette | Sub-select heads using that palette |
| SHIFT + NEXT/PREV HEAD | Step through elements (1.9.8+) |
| `101.2 ENTER`, `.1 > 3 ENTER`, `.> ENTER` | Elements: head 101 el. 2 / el. 1-3 / all; `. ENTER` cancels |
| `10 . 1 . 2 THRU 5 ENTER` | Elements 2-5 of function 1 on head 10 |

## 2. Intensity, times and attributes

| Keys | Does |
| --- | --- |
| `1 THRU 4 @ 40` / `@ FULL` / `@ +10` | Set level / full / relative |
| `@ 4` = 40%, `@ .4` or `@ 04` = 4% | Level shorthand |
| `@ 80 / 5` | Level with 5 s fade |
| `@ / 2 / 5` | 2 s delay, 5 s fade |
| `@ FULL / 3 *` | Fade split over 3 s across heads |
| `/ 0 > 5` (or `/ 5 > 0`) | Spread fades 0 to 5 s (reverse order works) |
| `GROUP 2 @ 10 THRU 20` | Intensity FX between 10% and 20% |
| `* 1 . 50 @ FULL` | Raw DMX channels 1-50 to full |
| `- -` after a selection | REM DIM: all other programmer heads to 0 |
| LOCATE / hold POS+LOCATE | Locate all / only that attribute |
| SHIFT / CTRL / CTRL+SHIFT + LOCATE | Lamp on / reset / lamp off |
| HIGHLIGHT / SHIFT + HIGHLIGHT / CTRL + HIGHLIGHT | Highlight / lowlight / solo |
| SHIFT + encoder | Fine (16-bit) |
| Encoder push / SHIFT + push | Next / previous wheel slot |
| `SET 3500` + CTC soft button | Type an exact attribute value |
| `SET -` + rotate soft button | Reverse rotation |
| FLIP / MIRROR soft buttons | Flip pan+tilt / invert pan only |
| Hold FAN (PC: SHIFT + FAN toolbar) | Fan mode: parts, segments, groups, chunks |
| FAN + NEXT/PREV HEAD | Cycle fan type: asymmetric, symmetric, end |
| FAN + LOCATE | Fan back to asymmetric |
| `GROUP 8 COL 4 BEAM 5 ENTER` | Apply palettes from the keypad |
| `GROUP 8 @ FULL FX 3 ENTER` | Full plus FX palette 3 |
| SHIFT + SQUARE OFF (Intensity window) | Invert levels (SQUARE OFF snaps to 0/full) |

## 3. Record, clear, include, copy

| Keys | Does |
| --- | --- |
| RECORD + S | Record to a playback |
| `6/2.0 ENTER` after RECORD | Record to playback 6, cue 2.0 |
| name + RECORD | Record and name in one go |
| SHIFT + RECORD | Record options (REC TYPE, masks, LOCK MASK) |
| Hold S + RECORD (or `REC 0 ENTER`) | Merge into the current cue |
| Hold `+` / `-` + RECORD | Record merge / record remove, then pick target |
| Hold UPDATE + RECORD | Update, then pick target |
| Hold `/` + RECORD | Record cue only |
| Hold `*` + RECORD | Selected heads only (`* +` merge, `* -` remove) |
| ALL + RECORD | Record entire state |
| THRU + RECORD | Snapshot of the whole output |
| Hold POS/COL/BEAM/INT + RECORD | Record only that attribute type |
| CTRL + RECORD | Record DMX input (Art-Net capture) |
| CLEAR / SHIFT + CLEAR / `5 CLEAR` | Clear all / selected heads only / over 5 s |
| SHIFT + CTRL + CLEAR | Force all LTP channels to 0 |
| `10 BLIND` | Enter blind over 10 s |
| `*` + SET / Hold SET + soft button | Make attributes active |
| `*` + REMOVE / REMOVE + encoder | Knock out all / one attribute from programmer |
| SHIFT + ACTIVE (Prog window) | Load all attributes of selected heads |
| `INC S` / `INC 2 S` / `INC POS COL S` | Include current cue / cue 2 / only pos+col |
| `GROUP 1 INC S` | Include just those heads from the cue |
| ALL + INCLUDE | Include entire state |
| `INCLUDE @ 40` + S | Include at 40% |
| CTRL + INCLUDE, ENTER | Include DMX input for selected heads |
| UPDATE / SHIFT + UPDATE | Re-record last included / force update |
| `1 THRU 2 COPY 5 THRU 8 ENTER` | Copy programmer data between heads |
| `1 THRU 2 COPY POS COL 5 THRU 8 ENTER` | Copy only position and colour |
| `GROUP 1 COPY GROUP 2` + S | Copy heads inside a cue |
| CTRL + Z / CTRL + Y (PC), SHIFT + UNDO | Undo / redo |

## 4. Palettes and fan timing

| Keys | Does |
| --- | --- |
| RECORD + palette entry | Store selected heads (merges with what is there) |
| `RECORD COL 5 ENTER` | Record palette from keypad |
| SHIFT + RECORD, REC INT | Put intensity into a palette |
| CTRL + ALL, then RECORD | Re-record so every changed head updates |
| UPDATE + RECORD | Update only attributes already in the palette |
| INCLUDE + entry, then UPDATE | Edit a palette |
| CTRL + RECORD + entry | Capture palette from DMX input |
| name + SET + entry | Name a palette |
| `3` + palette | Apply with 3 s fade |
| `0 THRU 3` + palette | Delay spread 0-3 s over heads |
| `0 THRU 3 / 1` + palette | Spread delay with 1 s fade |
| `3 *` + palette | Fan the time across heads |
| `3 */` / `3 *+` / `3 *-` / `3 *.` | Reverse / into centre / centre out / random |
| `*` alone + palette | Reuse the last fan time |
| `2+4` + palette | Fades from 2 s up to 4 s across heads |
| `*..` / `*//` / `*++` / `*--` | Group grid: left-right / right-left / out-in / in-out |
| `COL 5 / 4 * ENTER` | Keypad palette with fanned time |
| SHIFT + STEAL PALETTE | Update palettes matched by name/icon |
| SHIFT + UNLINK ALL PALETTE | Unlink all palettes of that type |
| `X/Y` + SET CIE (1.9.7+) | Store CIE xy colour in a palette |

## 5. FX

| Keys | Does |
| --- | --- |
| Encoder X / X button | Speed / stop-start FX |
| Encoder Y / Y button | Crossfade / tap tempo |
| SHIFT + Y | Attack / decay |
| Encoder C | Width |
| Encoder D / SHIFT + D | Size / oversize up to 800% |
| Encoder F / SHIFT + F | Segments / chunks |
| `.2` in Segments field | 2 chunks; `0` back to segments |
| ADD FX / ADD GROUP FX / CHANGE FX | Add FX / group FX / swap waveform |
| SHIFT + ADD FX 0 SIZE | Zero-size FX to override other playbacks |
| SHIFT + MAKE FX | Turn a chase into an FX |
| SHIFT + JOIN FX / SPLIT FX | Join / split multiple FX |
| BLIND BLIND | Restart FX |
| Press and release BLIND | Busk an FX in and out |
| CTRL + any TAP | Resync FX to start |
| One Shot, Bounce, PosDimCol FX (1.9.8+) | 1-4 shot FX, bounce directions, combined pos/dim/col |

## 6. Cue stacks and editing cues

| Keys | Does |
| --- | --- |
| S x2 / S x3 | Open Cue Stack window / its options |
| SHIFT + S double press | Cue window at the current cue |
| `COPY CUE 1 THRU 2 @ 5 ENTER` | Copy cues 1-2 to cue 5 |
| `COPY CUE 3 THRU 5 @ ENTER` | Copy cues to the end of the stack |
| `MOVE CUE 1 THRU 2 @ 5 ENTER` | Move cues |
| `REMOVE CUE 1 THRU 2 ENTER` | Remove cues |
| `INCLUDE CUE 2 ENTER` | Include cue 2 into programmer |
| SHIFT + COPY | Unlinked copy (default copy is linked) |
| Hold COPY, select several, release | Multi-copy |
| `RECORD MERGE 2 THRU 4` + S | Merge programmer into cues 2-4 |
| Hold S, `1 @ FULL THRU` | Head 1 to full in all cues |
| Hold S, `1 @ .. THRU` | Remove head 1 intensity from all cues |
| SHIFT + LINK / UNLINK CUE | Link / unlink cue at cursor |
| SHIFT + BLOCK CUE / UNBLOCK CUE | Block / unblock tracking |
| `1 THRU 5 THRU` in fade field | Symmetric fade times into centre |
| `SET CUE 1 TIME 2 ENTER` (1.9.8+) | 2 s fade on cue 1 from keypad |
| `SET CUE 1 TIME COL 2 ENTER` (1.9.8+) | Fade time for one attribute |
| `SET CUE 1 THRU 5 TIME 3 ENTER` (1.9.8+) | Time on a range of cues |
| `SET CUE TIME 5 ENTER` (1.9.8+) | Release time |
| CTRL + cue/stack in Store | Restart it |
| SHIFT + ENTER on Halt field | Advanced halt: timecode, scheduled, remote |

## 7. Playback, release and busking

| Keys | Does |
| --- | --- |
| S + GO / S + PAUSE | Step forward / back with no fade |
| SHIFT + GO (wing) | Pause |
| S + FLASH | Make this stack latest-touched (take back control) |
| SHIFT + FLASH | Toggle a fader-less playback |
| Cue ID, then manual GO | Jump to a cue |
| SHIFT + RELEASE / `3` SHIFT + RELEASE | Release all / over 3 s |
| Hold one S + SHIFT + RELEASE | Release all except that one |
| ALT + RELEASE | Release holdover playbacks |
| CTRL + RELEASE | Release all test playbacks |
| `3` RELEASE (playback selected) | Release that playback over 3 s |
| SHIFT + SEL, S source, S target | Move an active playback |
| Hold S + crossfader | Manual crossfade |
| `PAGE 5` / `PAGE 34 *` | Go to page / preload page |
| Hold S + soft button Y | Tap to time on that playback |
| Hold S + encoder X | Playback rate |
| RESET ALL RATE | All rates back to 100% |
| Speed master: FLASH / GO / PAUSE | Tap / run / halt |
| Speed master: SHIFT + GO / SHIFT + PAUSE | Double / halve |
| Speed master: CTRL + FLASH | Resync all its FX |
| `[time]` + palette | Busk a palette in with a fade |
| CTRL + BIG GO | Record a Live Macro; BIG GO runs it |
| Programmer master: FLASH | Bump programmer to 100% |
| Prog Store: REC PS / ACT PS | Store / recall programmer states (PS1-10) |
| DBO | Hold: HTP to zero (LTP stays) |
| Hold Next Page + press Prev Page on a bank (1.9.8+) | Swap that bank only |

## 8. Timecode and timeline

| Keys | Does |
| --- | --- |
| SHIFT + RECORD TC | Learn timing: press GO along with the music |
| `/` in the Wait field | Set cue to the current incoming timecode |
| SHIFT + encoder Y | Nudge all selected timecodes |
| SHIFT + encoder D | Timecode offset |
| SHIFT + soft button D | Timecode on/off without confirm |
| Encoder X press (timeline) | Play / pause |
| Encoder E | Zoom |
| SHIFT + click-drag | Box-select items |
| COPY, then click timeline | Paste at that point |
| SHIFT + CONFIG TC LOOP | Set up a timecode loop |
| REC double press (1.9.8+) | Record a cue at the playhead |
| AUTO/MANUAL BEATS (1.9.8+) | Beat grid: A/B start-end, C BPM, D insert |
| Record new TC Track | Record live GOs, flashes and faders to a track |

## 9. Patching

| Keys | Does |
| --- | --- |
| ENTER at address prompt | Next free address |
| `10@20` | 10 heads from address 20 |
| `10@2-20` | 10 heads, universe 2 address 20 |
| `10@+2-1` | First free address on universe 2 |
| `4/40` | 4 heads, 40 channels apart |
| `10 @ 7-2 * 201` | Head numbers start at 201 |
| `@ 0` | Patch without address |
| `2-1/` | Readdress selection keeping gaps |
| `u` or REMOVE in DMX field | Unpatch, keep programming |
| SHIFT + cursor, CLONE HEAD | Clone heads with programming |
| `1 THRU 4 SHIFT COPY 10 THRU 20 ENTER` | Copy head programming |
| SHIFT + ADD VDIM / REMOVE VDIM | Add / remove virtual dimmers |
| SHIFT + EDIT HEAD | Open Head Editor for that head |

## 10. Windows, navigation and PC keyboard

| Keys | Does |
| --- | --- |
| SHIFT + CLOSE | Close all windows |
| CTRL + top soft button | Recall layouts 1-12 |
| RECORD + CTRL + top soft button | Record a layout |
| CTRL + PROG / CTRL + OUT | Programmer info / Output info window |
| `2 OUT`, `2 EXEC`, `2 GROUP` | Second copy of a window |
| CTRL + SETUP | Net Manager |
| CTRL + BEAM (1.9.7+) | Framing blades window |
| SET SET | On-screen keyboard |
| SHIFT + SET | Icon chooser |
| SHIFT + MOVE | Drag-move mode |
| SHIFT / CTRL + cursors | Multi-select in any window |
| ALT + cursors | Page up/down/left/right |
| Double-click window title | Window size dialog |
| CTRL + C / V / A (PC) | Copy / paste / select all |
| CTRL + F (PC, Normal keyboard mode) | Find |
| CTRL + Q (PC) | Exit full-screen Execute |
| CTRL + BACKSPACE | Clear the command line |
| ALT + ADD/SWAP | Screenshot to screenshots folder |
| Hold SELECT + Execute item | View that item (FX/chase speed) |
| CTRL + SHIFT (Output heads view) | Raw 16-bit DMX values |

## 11. New speed tricks in 1.9.7 to 1.9.9

| Version | Keys / feature | Does |
| --- | --- | --- |
| 1.9.9 beta | `chase#100` in name keyboard | Auto-numbered names: chase100, chase101... |
| 1.9.9 beta | Assign Special, Prog Store | All PS1-PS10 on an Execute grid in one go |
| 1.9.9 beta | Assign Special, Live Macro | Rec / End / Go buttons in Execute |
| 1.9.9 beta | Setup, Always Show Record Options = No (Rec Rec) | REC REC records into the window, not to playbacks |
| 1.9.8 | `SET CUE n TIME ...` | Cue times from the keypad (see section 6) |
| 1.9.8 | `. NEXT HEAD` / SHIFT + NEXT HEAD | Step global elements / head elements |
| 1.9.8 | Record over a group or palette in Execute | Re-records the item itself |
| 1.9.8 | SHIFT + EDIT HEAD (Group window) | Head Editor for selected head |
| 1.9.8 | Hold bank Next Page + Prev Page | Swap one bank's page only |
| 1.9.8 | `<num> @ 0` in patch | Patch that many unpatched heads |
| 1.9.8 | One Shot / Bounce FX, chunks in FX | Hits that stop after 1-4 shots |
| 1.9.8 | Speed masters on Exec faders, named | Faster BPM busking |
| 1.9.7 | Hold ODD/EVEN (PC: SHIFT + ODD/EVEN) | Odd/even toolbar: parts, segments, chunks, pairs, grid order |
| 1.9.7 | Hold ALL / SHIFT + ALL | Select order toolbar (normal after random) |
| 1.9.7 | `name **` | Select group by name |
| 1.9.7 | Macro `998R` | Release all except the current playback |
| 1.9.7 | Type % on a Playbacks window fader | Set fader level directly |

## Sources and caveats

- The manual itself contradicts on two points: **CTRL + CLEAR** (all heads to 0 vs. all channels to defaults) and **ALT + ALL** (all heads of the selected type vs. snap colour). Test these on your version.
- No F1-F12 keyboard table was reachable; the PC keys above are the ones the manual mentions.
- 1.9.9.0 is beta at the time of writing.

Manual (1.9.9.x): [Programmer](https://docs.chamsys.co.uk/magicq/1.9.9.x/manual/programmer.html) · [Selecting](https://docs.chamsys.co.uk/magicq/1.9.9.x/manual/selecting.html) · [Intensity](https://docs.chamsys.co.uk/magicq/1.9.9.x/manual/dimmer_levels.html) · [Attributes](https://docs.chamsys.co.uk/magicq/1.9.9.x/manual/controlling_intelligent_heads.html) · [Palettes](https://docs.chamsys.co.uk/magicq/1.9.9.x/manual/palletes.html) · [FX](https://docs.chamsys.co.uk/magicq/1.9.9.x/manual/FX_engine.html) · [Editing cues](https://docs.chamsys.co.uk/magicq/1.9.9.x/manual/editing_cues.html) · [Cue stacks](https://docs.chamsys.co.uk/magicq/1.9.9.x/manual/cue_stacks.html) · [Playback](https://docs.chamsys.co.uk/magicq/1.9.9.x/manual/playback.html) · [Busking](https://docs.chamsys.co.uk/magicq/1.9.9.x/manual/busking.html) · [Patching](https://docs.chamsys.co.uk/magicq/1.9.9.x/manual/patching.html) · [Layout](https://docs.chamsys.co.uk/magicq/1.9.9.x/manual/console_layout.html)

Change notes: [1.9.9](https://docs.chamsys.co.uk/magicq-change-notes/stable/version1-9-9/v1.9.9-change-notes.html) · [1.9.8](https://docs.chamsys.co.uk/magicq-change-notes/stable/version1-9-8/v1.9.8-change-notes.html) · [1.9.7](https://docs.chamsys.co.uk/magicq-change-notes/stable/version1-9-7/v1.9.7-change-notes.html) · [Downloads](https://downloads.chamsys.co.uk/magicq)

MagicQ and ChamSys are trademarks of ChamSys Ltd. This sheet is an independent summary and is not affiliated with ChamSys.
