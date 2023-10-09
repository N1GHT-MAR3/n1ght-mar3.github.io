---
label: Setup Guide
meta:
  title: Juiced Setup Guide
---
# Setup Guide

!!! Before you start
* This setup guide is a work in progress. Information on this page is subject to change, and we cannot guarantee full game stability yet.
* This guide assumes you have a copy of the game. We do not offer download links for the game at this time.
!!!

## Installing the game
Avoid installing the game to the default directory, if possible. Program Files (x86) is a protected directory that requires administrator privileges to make changes, which can cause incompatibility with many programs.

After the game is installed, uncheck the "Launch Juiced?" checkbox. You will most likely not be able to run the game in its current state.

## Juiced Config
Run JuicedConfig.exe in the Juiced folder, wherever you installed it to. This will initialize some settings that the game needs to run.

Set your desired resolution (making sure to pick 32-bit color), anti-aliasing level, and whether or not you want windowed mode or widescreen. Bear the following in mind, however:
* Resolutions above 1920x1080 are not available in the Config.
* Depending on your hardware, the Config may not show all anti-aliasing levels, even if your hardware can handle it. The maximum level the game supports is 8.
* If Windowed mode is enabled, the available resolutions will be drastically cut down.
* Widescreen scaling is broken for non-16:10 aspect ratios.

All of the above issues are fixable outside Juiced Config, so don't worry if your graphics settings are not perfect.

Once you're done, click OK, then OK to the dialog that appears.

## Registry tweaks
To get around the limitations of Juiced Config, we can edit the game's registry keys directly, allowing us to set whatever we want.

* Hold the Windows button and press R to bring up the Run dialog.
* Type "regedit" and press enter, granting administrator privileges if prompted.
* Navigate to "Computer\HKEY_CURRENT_USER\Software\THQ\Juiced".

### Custom resolution
!!!
Make sure to set the base to Decimal before inputting the desired values.
!!!
* Set "RezWidth" to the width of your desired resolution. (i.e. 1920 for 1920x1080)
* Set "RezHeight" to the height of your desired resolution. (i.e. 1080 for 1920x1080)
* Make sure "RezDepth" is set to 32.

### Full anti-aliasing
If anti-aliasing level 8 was not available in Juiced Config, you can manually set "Antialiasing" to 8.

### Change language
!!!
Make sure to set the base to Decimal before inputting the desired value.
!!!
You can change the game's language to any of the five supported by changing "language" to:
* English: 9
* French: 1036
* German: 7
* Italian: 16
* Spanish: 10

## Install the patch

* Fixes the "Juiced requires virtual memory to be enabled" error
* Mitigates random crashes
* Prevents your car from veering off to one side on its own

### Installation (official .exe)
!!!
This .exe requires an actual disc to be present, and does not allow for certain .exe patches.
!!!
* Download [Juiced Patch #1 - 08th Jul 2005.zip from PCGamingWiki](https://community.pcgamingwiki.com/files/file/2203-juiced-patch-1/)
* Extract Juiced.exe to your Juiced folder, overwriting the original when prompted

### Installation (Z3r0n3 .exe)

Runs without the CD inserted and allows all .exe patches.

!!!
We do not offer download links to the Z3r0n3 .exe at this time.
!!!

* Z3r0n3 v1: 30,097,408 bytes, SHA256: c01235d92323f957ec114faadc2ac0e3c0cd16791ad1e9392936fb1a8dbd6065
* Z3r0n3 v2: 13,760,830 bytes, SHA256: 1cc6388d6bb4bb813f0044ae94ed4b5171ba8cdd2b1d8cc5830f08c1c8dad7b7

!!!warning Warning
The Z3r0n3 v2 .exe may cause crashes when searching for games online, though this is currently unconfirmed.
!!!

Extract Juiced.exe to your Juiced folder, overwriting the original when prompted.

## [D3D9Wrapper](https://github.com/ThirteenAG/d3d9-wrapper/releases/latest)
*by ThirteenAG*

* Allows for borderless fullscreen
* Can force the game to open on the primary monitor
* Alleviates instability caused by alt-tabbing

### Installation

1. Download d3d9.zip from the link above
2. Extract d3d9.dll and d3d9.ini to your Juiced folder
3. Open d3d9.ini in a text editor
4. Change the following settings to your preference:
  * ForceWindowedMode = 1 and ForceWindowStyle = 1 for borderless fullscreen
  * UsePrimaryMonitor = 1 to force the game to use the primary monitor
  * DoNotNotifyOnTaskSwitch = 1 to prevent disconnects when alt-tabbing online
  !!!warning Warning
DoNotNotifyOnTaskSwitch prevents the game's control mapper from working. If you need to change your controls, make sure this is disabled first.
!!!

## [Microsoft DirectInput Mapper](https://community.pcgamingwiki.com/files/file/58-microsoft-directinput-mapper/)
*installer by Garrett*

Fixes the control mapper on modern versions of Windows.

### Installation
1. Download Microsoft_DirectInput_Mapper.zip from the link above
2. Extract anywhere
3. Run "install (run as admin).bat" as administrator
4. Click OK on the dialog that appears

Selecting "CONTROLS" in the in-game settings menu should now work properly.

## [JuicedWidescreenFix](https://github.com/TFP-dev/JuicedWidescreenFix)
*by TFP*

Scales widescreen properly for all aspect ratios, and allows for custom FOV.

Installation instructions are in the link.

## Online patch

Restores online functionality by redirecting to [OpenSpy](https://beta.openspy.net).

### Installation

1. Download the latest release of [Juiced Editor](https://github.com/N1GHT-MAR3/JuicedEditor/releases/latest)
2. Open JuicedEditor.exe
3. Open Juiced.exe in your Juiced folder (File -> Open...)
  * If it says ".exe type could not be determined", ignore it and click OK
4. Click "Patch Servers"
5. Click "OK" on the dialog that appears
6. Save your changes (File -> Save)
  * If Juiced Editor fails to save, try launching as an administrator, and check Juiced.exe's properties to make sure it's not read-only
7. Click OK and exit Juiced Editor

## In-game configuration

Run Juiced.exe. The game should launch without any issues.

### Controls

After creating a profile, go to the main menu -> OPTIONS -> CONTROLS. The Microsoft DirectInput Mapper should appear.

* Select your desired input device at the top of the window.
* Press a button on your controller/keyboard, and the corresponding button should turn yellow in the control mappings.
* Double-click the highlighted button, and you can remap it as you see fit.
* If both of your triggers correspond to Z Axis, bind Throttle, and it will automatically split throttle and brake between the two triggers.
* Click OK once you're done.

### Create an online account

* At the main menu, ONLINE -> CREATE PROFILE.
* Choose a nickname, email, and password. You don't have to use a real email.
* Click SUBMIT, and you should hopefully be logged in and sent to the ONLINE screen.

!!!
Once you enter the Online screen for the first time, a Windows firewall pop-up should appear. This may be hidden behind the game window depending on your graphics settings, in which case you should alt-tab to find it. Allow Juiced access through the desired network types.
!!!

!!!danger Danger
Once you log-in, your password is saved in plaintext to your current save file. Anyone can see it by opening it up in a hex editor. NEVER share your save file with anyone once you've logged in with it!
!!!
