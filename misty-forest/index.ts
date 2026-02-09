"use strict";
// Programmer's Name:
// Program Name:
//////////////////////////////////////////////////////////////////////////
/*
 * Copyright 2012, 2016, 2020 Cheng
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     https://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {
    print,
    getInput,
    javaSleep,
    currentDate
} from "./cs10-txt-lib-0.6.ts";
import * as Fun from "./cs10-txt-lib-0.6.ts";
// Don't edit the import lines above, or you won't be able to write your program!

// Also, do not use the following variable and function names in your own code below:
//    print, getInput, javaSleep, currentDate, Fun

// Write your program below this line:
// ***********************************

let gameOver = false;
let screen = "splash screen";
//let screen = ""
let input: string = "";
let playerName: string = "";
let playerHealth = 100;
let youngMistyHealth = 100;
let maxPlayerHealth = 100;
let strength = 100;
let normalAttack: number = 0;
let strongAttack: number = 0;
let heal: number = 0;
let playerAttackRandom: number = 0;
let count: number = 0;
let coins: number = 0;
let mistyStrength = 75;
let mistyHealth = 0;
let mistyAttack: number = 0;
let coinsGotten: number = 0;
let nextScreen: string = "Main hub";
let fightChance: number = 0;
let alreadyFought = false;
let treeEssence = false;
let treeImmobilizer = false;
let dungeonKey = false;
let dungeonGate = false;
let mistGaurdianBeaten = false;
let mistGuardianHealth = 600;
let mistGuardianAttackRandom: number = 0;
let storeCostHealth: number = 65;
let storeCostStrength: number = 55;
let mistDragonHealth: number = 0;
let mistDragonAttackRandom: number = 0
let mistDragonAttackChance: number = 0


while (gameOver == false) {

    if (screen == "Misty Fight") {
        print(" UNLUCKY, you encountered a Misty");
        mistyHealth = mistyStrength
        playerHealth = maxPlayerHealth
        mistyAttack = mistyStrength * 0.1

        Fun.threadSleep(1000);

        screen = "Misty Battle"

    }

    if (screen == "Misty Battle" && mistyHealth >= 1 && playerHealth > 1) {

        playerHealth = playerHealth - mistyAttack

        normalAttack = strength * 0.1
        strongAttack = strength * 0.25
        heal = strength * 0.1




        print("\n\n                                                              .?J7JGPJ!.        .~..^.")
        print("                                              ?7. .~. 77^.:.  :!5#BGBBBPJ7.     :PGGGY")
        print("                                             ~GBG5G#GYBBGPBP?!G5G#G#BBBB&B5?~    7#BBG~:")
        print("                                         .!!!##B#B#BB#BB##GGBGGGGGGGGGGB#BB#G!.  .~YBBB5~.")
        print("                                        .Y#GBBGB#B#BGB#B#BBB#BGBGGBBBB##BGB#B#P5~   ^PBBBP^")
        print("                                    . .^JBGGGB#####B#BBBBG#GB##BBB#&#B#BGGGGGGGGBYYY^7BGGB!.")
        print("                                   JPYPGBB#BB##BBGBBGBB#B#GPPG##B##BBBBBBBBBBGGGGGBGG5BBBBG!")
        print("                               ~P5YGBGGGB##BGBBGBBBBBGGBBBBBB##BBGBBBBBBBBBBGB##B#BGBBG#GBGJ")
        print("                            .5PPBGGGGBBBB##BBBBBBBBB#BB#BBB#BBBGBBBBBBBBBBB#B##BBBBGGPPGBB7")
        print("                     .^~.  ^YBBGGGBBBBBBB##BBGBBBBGB#BBBBBBGBBBBBBBBBBBBBGBBBBBGBBBBGGGPGGP..")
        print("                .^~?GPGBGYPBGGGBBBBBBGB###BBBBBBBB###BGBBBBGBBBGBBBBBBBBBBBGBBBBBBBBBGBBBGGGG5^")
        print("               ~BB##BBB#&#BGPBBBBGBBBGB##BGBBBGBBB##GGBBBBGB##BBBBBGBGGGGBGGBBBBBBBBBBBBBGGGPBB^")
        print("              ~GPYGBGGBB#BPGGBBBBB##BGGBBBBBBBB#&#BBGBBBBBB#&BBBBBBBBBBBBGBBBBBBBBBB###BGBBGPPBJ:")
        print("              :^.  !PJPGPGBBBBGB###BBBGGGGB#B##B##BBBGB##B##BBBBBBBBBBBBBG##BBBBBBBBBBGBBBBBGGPGG5:")
        print("                   J#GGGGGBBBBBB##GBBBBBBGB##BBBBBBBBBB##BBBBBBBBBBBBBBBBBBBBBBBBBBBGBBBBBBBBGGPGB^")
        print("               .:.?#GGGBBBBB#B###BBGBBBBBBB#BBBBBBBBB###BBBBBBBBBBB####BBBBBBBBBBBBBBBBBBBBBBBGGPGJ.")
        print("      .:. ..^:.YBGGGGBBBBBGB##BBBBBBBBBBBBBBBBBBBB#####BBBBBBBBBB####BBBBBBBBBBBBBBBBBBBBBBBBBBGGPB5")
        print("   .~JPBP5PPBGBG#GBBBBBBBBBB##BBBBBBBBBBBBBBBBBBBB#&BBBBBBBBBBB##&#BBBBBBBBBBBBBBBBBBBBBBBBBBBBBGPGB!")
        print(" !5GB&BBB#GBGBBBBBGGGBBBBBBBBB#&#BBBBBBBBBBBBBBB####BBBBBBBBBB#&#BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBGGBY")
        print(" ^?BGJ?557^JPB##B#BBBBBBBBB#B##BBBBBBBBBBBBBBB#B##BBB##BBBBBB###BBBBBBBBBBBBBBBB##&##BBBBBBBBBBBBGGG.")
        print("   ^:    .^5BGB#BBBBBBBBBBB&#BBBBBBBBB##BBBBBB&#BBB###BBBBBB##BBBBBBBBBBBBBBBB|||||||BBBBBBBBBBBBBGP.")
        print("        :GBGB##BBBBBBBBBBBB##BBBBBBBB#&BBBBBBB&#BB#&BBBBBBBB###BBBBBBBBBBBBB||||||||||BBBBBBBBB#&@&GP")
        print("         YBPG##BBBBBBBBBB###BBBBBBBBBB&#BBBBBB######BBBBBBBB&#BBBBBBBBBBBBBB|||||||||BBBBBBBB&@@@BB7")
        print("       :J5BGBB##BBBBBBBBBB#&BBBBBBBBBB##BBBBBBBBB&##BBBBBB###BBBBBBBBBBBBBBB||||||||BBBBBBBB&#G&#BY")
        print("       .7BBGBB&BBBBBBBBBBB##BBBBBBBBBBBB##BBBBB#######BBBB####BBBBBBBBBBBBBB||||||BBBBBBBBBB&&##BY.")
        print("         ^P&B##BBBBBBBB###&#BBBBBBBBB###&#BBB##&##BB########&#####BBBBBBBBBBBBBBBBBBBBBBBBBBB#BP!")
        print("          ^7P##&#BBBBBB#&#BBBBBBB####&##&#####B#BBBBBBB###BBBBB#B###BBBBBBBBBBBBBBBBBBBBBBBBG57.")
        print("            .~7JPBBBB#######B##B#&####BB####B##BB#BB#####BB###B##BBBB####B##B##B##B##B#BG5J!:")
        print("                :^~~?J!!77PP?JJ??YJ55YPGPY55YJ5YJYJ??JJPG5?JJ!7JGGP5JYJ?YY?~!YY?JPYYY7^.")

        print("\nMisty has dealt", mistyAttack, "damage to you")


        print("\n\n||Your health is", playerHealth + "||")


        print("\n\n|| Enemies Health is", mistyHealth + "||");

        print("\n\n\n(1) Normal attack 75% chance it hits and it deals", normalAttack)
        print("\n(2) Strong attack: 45% chance of hitting and deals", strongAttack)
        print("\n(3) Heal: Heals", heal, "of health ")

        input = getInput();

        if (input == "1") {
            playerAttackRandom = Math.random();
            if (playerAttackRandom <= 0.75) {
                print("\n\n\n\nYou dealt", normalAttack, "damage to the the Misty")
                mistyHealth = mistyHealth - normalAttack;
                Fun.threadSleep(1000)

            } else {
                print("\n\n\n\nYou missed the attack")
                Fun.threadSleep(1000)


            }

        }

        if (input == "2") {
            playerAttackRandom = Math.random();
            if (playerAttackRandom <= 0.45) {
                print("\n\n\n\nyou dealt", strongAttack, "damage to the Misty")
                mistyHealth = mistyHealth - strongAttack;
            } else {
                print("\n\n\n\nYou missed the attack")
            }
            Fun.threadSleep(1000)
        }

        if (input == "3") {
            print("\n\n\n\nyou healed", heal, "health")
            playerHealth = playerHealth + heal;
            Fun.threadSleep(1000)
        }

    }

    if (screen == "Misty Battle" && playerHealth < 1) {
        print("\n\n__   __           ______ _          _")
        print("\\ \\ / /           |  _  (_)        | |")
        print(" \\ V /___  _   _  | | | |_  ___  __| |")
        print("  \\ // _ \\| | | | | | | | |/ _ \\/ _` |")
        print("  | | (_) | |_| | | |/ /| |  __/ (_| |")
        print("  \\_/\\___/ \\__,_| |___/ |_|\\___|\\__,_|")
        gameOver = true
    }

    if (screen == "Misty Battle" && mistyHealth < 1) {
        mistyStrength = mistyStrength + 10;
        coinsGotten = mistyStrength * 0.6;
        coins = coins + coinsGotten;
        print("\nYOU WON, you get", coinsGotten, "coins");
        print("\nYou have", coins, "coins");

        screen = nextScreen;

    }








    if (screen == "splash screen") {

        print("        _     _             ___                   _   ")
        print("  /\\/\\ (_)___| |_ _   _    / __\\__  _ __ ___  ___| |_ ")
        print(" /    \\| / __| __| | | |  / _\\/ _ \\| '__/ _ \\/ __| __|")
        print("/ /\\/\\ \\ \\__ \\ |_| |_| | / / | (_) | | |  __/\\__ \\ |_ ")
        print("\\/    \\/_|___/\\__|\\__, | \\/   \\___/|_|  \\___||___/\\__|")
        print("                  |___/                               ")

        print("")
        print("(1) type 1 to start (2) type 2 to quit")

        input = getInput();

        if (input == "1") {
            screen = "player name";

        }

        if (input == "2") {

            print("quiting...")
            gameOver = true;
        }
    }

    if (screen == "player name") {

        print("Please enter your name");
        playerName = getInput();

        print("Hi", playerName)

        print("(1) Go to first fight");
        count = 0
        input = getInput();

        if (input == "1") {

            screen = "first fight";
        }

    }

    if (screen == "first fight" && youngMistyHealth > 0 && playerHealth > 0) {

        playerHealth = playerHealth - 5
        normalAttack = strength * 0.1
        strongAttack = strength * 0.25
        heal = strength * 0.1



        print("\n\n\nYou You are getting attacked by a Young Misty \nChoose your attack");


        if (count < 1) {
            print("\nYoung Misty deals 5 health of damage and has 100 health");
            print("NOTE: Your health can go below zero and you have a one chance to kill the enemy but if you don't you will die.")
        } else {

        }



        print("\n\n                                       @     @:@  @:@       @")
        print("                                       @@ @:::::::::@@@@@  @:@")
        print("                                           @::::@@@::::@:::::@ @@::")
        print("                                  @@   @@@     @@@@@@@@@@@@@::::::@")
        print("                                  @::@@:@@      @@@@@@@@     @  @@:::@   @")
        print("                           @:@ @::::@@@@@@@@@@@@@@@@@@@@ @    @   @:::@@:@")
        print("                               @@   @@@@@@@@@@@@@@@@@@@@@@@@::@   @@@::@")
        print("                             @    @    @@  @@@@@@@@@@@@@@@@@@:@@     @:@@@:")
        print("                           ::::@@::          @@@@@@@@@@@@@@@@@@@@:   @:::::@")
        print("                         :@@@@@@@@@@@:@@@@@ @@@@@@@@@@@@@@@@@@@@@:@   :::::@")
        print("                         @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@:@ @@::::@")
        print("                      @@@@:@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@:@")
        print("                         @:@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     @@@@@")
        print("                        @@:@@ @@@  @@@@@@@@@@@@@@@@@@@@      @@@@@@@@@@   @:@")
        print("                         @::@           @@@@@@@@@@@@@@@@@@     @@@@@@::@    @")
        print("                           @:@            @@@@@@@@@@@@@@@@@@@    @@@@::::@   @")
        print("                           ::@  :@             @@@@@@@@@@@@@@@      @::::@")
        print("                           @@@ $$$$      @$:@   @@@@@@@@@@@@@@@@@   @::@@@@")
        print("                             @ @$$$@    @$$$$:     @@@@@@@@@@@@@   @::@@")
        print("                                $$ @    $$$$$$$         @@@@@@@@")
        print("                                         :$$$$@    @@@    @@        @:@")
        print("                                                   @:            @    @")


        print("\n\nMisty has dealt 5 damage to you")

        print("\n\n||Your health is", playerHealth + "||")



        print("\n\n|| Enemies Health is", youngMistyHealth + "||");

        print("\n\n\n(1) Normal attack 75% chance it hits and it deals", normalAttack)
        print("\n(2) Strong attack: 45% chance of hitting and deals", strongAttack)
        print("\n(3) Heal: Heals", heal, "of health ")
        print("\n(4)items: No items found")
        count = count + 1

        input = getInput();

        if (input == "1") {

            playerAttackRandom = Math.random();
            if (playerAttackRandom <= 0.75) {
                print("\n\n\n\nYou dealt", normalAttack, "damage to the Young Misty")
                youngMistyHealth = youngMistyHealth - normalAttack;

            } else {
                print("\n\n\n\nYou missed the attack")


            }
            Fun.threadSleep(1000)
        }

        if (input == "2") {

            playerAttackRandom = Math.random();
            if (playerAttackRandom <= 0.45) {
                print("\n\n\n\nyou dealt", strongAttack, "damage to the young Misty")
                youngMistyHealth = youngMistyHealth - strongAttack;
            } else {
                print("\n\n\n\nYou missed the attack")
            }
            Fun.threadSleep(1000)
        }

        if (input == "3") {
            print("\n\n\n\nyou healed", heal, "health")
            playerHealth = playerHealth + heal;
            Fun.threadSleep(1000)
        }

    }

    if (screen == "first fight" && playerHealth <= 0) {
        print("You died")
        gameOver = true
    }

    if (screen == "first fight" && youngMistyHealth <= 0) {
        print("\nYOU WON, you get 100 coins")
        coins = coins + 100

        screen = "Main hub"
    }










    if (screen == "Main hub") {

        print("\nWhere do you want to go")
        print("\n(1)Go to Mist Tower \n(2)Go to Upgrade Store \n(3)Go to Misty Forest")

        input = getInput();

        if (input == "1") {

            screen = "Mist Tower";

        }

        if (input == "2") {

            screen = "shop"
        }

        if (input == "3") {

            screen = "Misty Forest Entrance";

        }
    }









    //Mist Tower


    if (screen == "Mist Tower" && mistGaurdianBeaten == false) {


        print("             _,._")
        print("           ,'   ,`-.")
        print("|.        /     |\\  `.")
        print("\\ \\      (  ,-,-` ). `-._ __")
        print(" \\ \\      \\|\\,'     `\\  /'  `\\")
        print("  \\ \\      ` |, ,  /  \\ \\     \\")
        print("   \\ \\         `,_/`, /\\,`-.__/`.")
        print("    \\ \\            | ` /    /    `-._")
        print("     \\\\\\           `-/'    /         `-.")
        print("      \\\\`/ _______,-/_   /'             \\")
        print("     ---'`|       |`  ),' `---.  ,       |")
        print("      \\..-`--..___|_,/          /       /")
        print("                 |    |`,-,...,/      ,'     ")
        print("                 \\    | |_|   /     ,' __  r-'',")
        print("                  |___|/  |, /  __ /-''  `'`)  |  ")
        print("               _,-'   ||__\\\\ /,-' /     _,.--|  (")
        print("            .-'       )   `(_   / _,.-'  ,-' _,/")


        print("\nAs you approach the entrance of the tower, the Mist Guardian falls from the sky.")

        Fun.threadSleep(1000)

        print("")

        print("The Mist Guardian deals 40 damage every attack but has terrible accuracy and has 500 health.")

        print("\n(Has a 60% chance of hitting you)")

        Fun.threadSleep(3000)

        mistGuardianHealth = 500

        playerHealth = maxPlayerHealth

        count = 0



        screen = "Mist Guardian Tower Boss";
    }

    if (screen == "Mist Guardian Tower Boss" && playerHealth > 0 && mistGuardianHealth > 0) {

        mistGuardianAttackRandom = Math.random();

        normalAttack = strength * 0.1
        strongAttack = strength * 0.25
        heal = strength * 0.1












        print("\n      _,.")
        print("      ,` -.)")
        print("     ( _/-\\\\-._")
        print("    /,|`--._,-^|            ,")
        print("    \\_| |`-._/||          ,'|")
        print("      |  `-, / |         /  /")
        print("      |     || |        /  /")
        print("       `r-._||/   __   /  /")
        print("   __,-<_     )`-/  `./  /")
        print("  '  \\   `---'   \\   /  /")
        print("      |           |./  /")
        print("      /           //  /")
        print("  \\_/' \\         |/  /")
        print("   |    |   _,^-'/  /")
        print("   |    , ``  (\\/  /_")
        print("    \\,.->._    \\X-=/^")
        print("    (  /   `-._//^`")
        print("     `Y-.____(__}")
        print("      |     {__)")
        print("            ()")




        if (mistGuardianAttackRandom > 0.40 && count > 0) {

            print("\n(Mist Guardian has dealt", 45, "damage to you)")

            playerHealth = playerHealth - 40;


        } else if (mistGuardianAttackRandom <= 0.40) {
            print("\n(Mist Guardian Missed)")

        }




        print("\n\n||Your health is", playerHealth + "||")


        print("\n\n|| Mist Guardian Health is", mistGuardianHealth + "||");

        print("\n\n(1) Normal attack 75% chance it hits and it deals", normalAttack)
        print("\n(2) Strong attack: 45% chance of hitting and deals", strongAttack)
        print("\n(3) Heal: Heals", heal, "of health ")

        count = count + 1

        input = getInput();

        if (input == "1") {
            playerAttackRandom = Math.random();
            if (playerAttackRandom <= 0.75) {
                print("\n\n\n\nYou dealt", normalAttack, "damage to the the Mist Guardian ")
                mistGuardianHealth = mistGuardianHealth - normalAttack;
                Fun.threadSleep(1000)

            } else {
                print("\n\n\n\nYou missed the attack")
                Fun.threadSleep(1000)


            }

        }

        if (input == "2") {
            playerAttackRandom = Math.random();
            if (playerAttackRandom <= 0.45) {
                print("\n\n\n\nyou dealt", strongAttack, "damage to the Mist Guardian ")
                mistGuardianHealth = mistGuardianHealth - strongAttack;
            } else {
                print("\n\n\n\nYou missed the attack")
            }
            Fun.threadSleep(1000)
        }

        if (input == "3") {
            print("\n\n\n\nyou healed", heal, "health")
            playerHealth = playerHealth + heal;
            Fun.threadSleep(1000)
        }
    }

    if (screen == "Mist Guardian Tower Boss" && playerHealth < 1) {
        print("\n\n__   __           ______ _          _")
        print("\\ \\ / /           |  _  (_)        | |")
        print(" \\ V /___  _   _  | | | |_  ___  __| |")
        print("  \\ // _ \\| | | | | | | | |/ _ \\/ _` |")
        print("  | | (_) | |_| | | |/ /| |  __/ (_| |")
        print("  \\_/\\___/ \\__,_| |___/ |_|\\___|\\__,_|")
        gameOver = true
    }

    if (screen == "Mist Guardian Tower Boss" && mistGuardianHealth < 1) {

        print("\nYOU WON")
        print("\nTime to fight the Mist Dragon")

        Fun.threadSleep(2000)
        mistGaurdianBeaten = true;

        screen = "Mist Tower"

    }


    if (screen == "Mist Tower" && mistGaurdianBeaten == true) {

        print("\nYou enter the tower and see a large collection of stairs that probably lead to the roof of the tower");

        print("\n(1)Climb the stairs to the roof \n(2)Go back")

        input = getInput();

        if (input == "1") {

            screen = "Mist Dragon"
        }

        if (input == "2") {

            screen == "Main hub"
        }

    }


    if (screen == "Mist Dragon") {

        print("\n                                       \\/")
        print("                                       ^`'.")
        print("                                       ^   `'.")
        print("             (                         ^      `'.")
        print("           )  )        \\/              ^         `'.")
        print("         (   ) @       /^              ^            `'.")
        print("       )  )) @@  )    /  ^             ^               `'.")
        print("      ( ( ) )@@      /    ^            ^                  `'.")
        print("    ))  ( @@ @ )    /      ^           ^                     `'.")
        print("   ( ( @@@@@(@     /       |\\_/|,      ^                        `'.")
        print("  )  )@@@(@@@     /      _/~/~/~|C     ^                           `'.")
        print("((@@@(@@@@@(     /     _(@)~(@)~/\\C    ^                              `'.")
        print("  ))@@@(@@)@@   /     /~/~/~/~/`\\~`C   ^             __.__               `'.")
        print("   )@@@@(@@)@@@(     (o~/~o)^,) \\~ \\C  ^          .' -_'-'\"...             `.")
        print("    ( (@@@)@@@(@@@@@@_~^~^~,-/\\~ \\~ \\C/^        /`-~^,-~-`_~-^`;_           `.")
        print("      @ )@@@(@@@@@@@   \\^^^/  (`^\\.~^ C^.,  /~^~^~^/_^-_`~-`~-~^\\- /`'-./`'-. ;")
        print("       (@ (@@@@(@@      `''  (( ~  .` .,~^~^-`-^~`/'^`-~ _`~-`_^-~\\         ^^")
        print("           @jgs@             (((` ~ .-~-\\ ~`-_~`-/_-`~ `- ~-_- `~`;")
        print("          /                 /~((((` . ~-~\\` `  ~ |:`-_-~_~`  ~ _`-`;")
        print("         /                 /~-((((((`.\\-~-\\ ~`-`~^\\- ^_-~ ~` -_~-_`~`;")
        print("        /                 /-~-/(((((((`\\~-~\\~`^-`~`\\ -~`~\\-^ -_~-_`~-`;")
        print("       /                 /~-~/  `((((((|-~-|((`.-~.`Y`_,~`\\ `,- ~-_`~-`;")
        print("      /              ___/-~-/     `\"\"\"\"|~-~|\"''    /~-^ .'    `:~`-_`~-~`;")
        print("     /         _____/  /~-~/           |-~-|      /-~-~.`      `:~^`-_`^-:")
        print("    /    _____/        ((((            ((((      (((((`           `:~^-_~-`;")
        print("    \\___/                                                          `:_^-~`;")
        print("                                                                    `:~-^`:")
        print("                                                                  ,`~-~`,`")
        print("                                                                 ,\"`~.,'")
        print("                                                               ,\"-`,\"`")
        print("                                                             ,\"_`,\"")
        print("                                                            ,\",\"`")
        print("                                                         ;~-~_~~;")
        print("                                                          '. ~.'")

        print("\nYou reach the roof of the tower and are greeted by a roar from the Mist Dragon. The mist Dragon has 1000 health.")

        Fun.threadSleep(2000)

        print("\n(Mist dragon deals 35 damage with his regular attack and has a 0% chance in missing it, \nhas a strong attack that deals 110 damage but has a 75% chance missing it, can heal 55 health)")

        Fun.threadSleep(2000)

        count = 0
        playerHealth = maxPlayerHealth
        mistDragonHealth = 1000
        screen = "Mist Dragon Boss"

    }


    if (screen == "Mist Dragon Boss") {

        mistDragonAttackRandom = Math.random();
        mistDragonAttackChance = Math.random();

        normalAttack = strength * 0.1
        strongAttack = strength * 0.25
        heal = strength * 0.1





        print("     |\\                                                              /|")
        print("      | \\                                                            / |")
        print("      |  \\                                                          /  |  ")
        print("      |   \\                                                        /   |    ")
        print("     |    \\                                                      /    |     ")
        print("_____)     \\                                                    /     (____ ")
        print("\\           \\                                                  /          / ")
        print(" \\           \\                                                /          /  ")
        print("  \\           `--_____                                _____--'          /   ")
        print("   \\                  \\                              /                 /    ")
        print("____)                  \\                            /                 (____ ")
        print("\\                       \\        /|      |\\        /                      / ")
        print(" \\                       \\      | /      \\ |      /                      /  ")
        print("  \\                       \\     ||        ||     /                      /   ")
        print("   \\                       \\    | \\______/ |    /                      /    ")
        print("    \\                       \\  / \\        / \\  /                      /     ")
        print("    /                        \\| (*\\  \\/  /*) |/                       \\     ")
        print("   /                          \\   \\| \\/ |/   /                         \\    ")
        print("  /                            |   |    |   |                           \\   ")
        print(" /                             |\\ _\\____/_ /|                            \\  ")
        print("/______                       | | \\)____(/ | |                      ______\\ ")
        print("       )                      |  \\ |/vv\\| /  |                     (        ")
        print("      /                      /    | |  | |    \\                     \\       ")
        print("     /                      /     ||\\^^/||     \\                     \\      ")
        print("    /                      /     / \\====/ \\     \\                     \\     ")
        print("   /_______           ____/      \\________/      \\____           ______\\    ")
        print("           )         /   |       |  ____  |       |   \\         (           ")
        print("           |       /     |       \\________/       |     \\       |           ")
        print("           |     /       |       |  ____  |       |       \\     |           ")
        print("           |   /         |       \\________/       |         \\   |           ")
        print("           | /            \\      \\ ______ /      /______..    \\ |           ")
        print("           /              |      \\\\______//      |        \\     \\           ")
        print("                          |       \\ ____ /       |LLLLL/_  \\                ")
        print("                          |      / \\____/ \\      |      \\   |               ")
        print("                          |     / / \\__/ \\ \\     |     __\\  /__             ")
        print("                          |    | |        | |    |     \\      /             ")
        print("                          |    | |        | |    |      \\    /              ")
        print("                          |    |  \\      /  |    |       \\  /               ")
        print("                          |     \\__\\    /__/     |        \\/                ")
        print("                         /    ___\\  )  (  /___    \\                         ")
        print("                        |/\\/\\|    )      (    |/\\/\\|                        ")
        print("                        ( (  )                (  ) )")





        if (count > 0) {

            if (mistDragonAttackRandom < 0.25) {

                if (mistDragonAttackChance < 0.25) {

                    playerHealth - 110

                    print("\nMist dragon has dealt 110 damage")
                }

            } else if (mistDragonAttackRandom < 0.25) {
                print("\nMist Dragon Missed")
            }

            if (mistDragonAttackRandom > 0.25 && mistDragonAttackRandom < 0.45 && mistDragonHealth < 600) {

                mistDragonHealth = mistDragonHealth + 55;

                print("\nMist Dragon has healed 55 health");
            } else if (mistDragonAttackRandom > 0.25) {

                playerHealth = playerHealth - 35;

                print("Mist Dragon has dealt 35 damage")

            }

        }


        print("\n\n||Your health is", playerHealth + "||")


        print("\n\n|| Mist Dragon Health is", mistDragonHealth + "||");

        print("\n\n(1) Normal attack 75% chance it hits and it deals", normalAttack)
        print("\n(2) Strong attack: 45% chance of hitting and deals", strongAttack)
        print("\n(3) Heal: Heals", heal, "of health ")

        count = count + 1

        input = getInput();

        if (input == "1") {
            playerAttackRandom = Math.random();
            if (playerAttackRandom <= 0.75) {
                print("\n\n\n\nYou dealt", normalAttack, "damage to the the Mist Dragon")
                mistDragonHealth = mistDragonHealth - normalAttack;
                Fun.threadSleep(1000)

            } else {
                print("\n\n\n\nYou missed the attack")
                Fun.threadSleep(1000)


            }

        }

        if (input == "2") {
            playerAttackRandom = Math.random();
            if (playerAttackRandom <= 0.45) {
                print("\n\n\n\nyou dealt", strongAttack, "damage to the Mist Dragon")
                mistDragonHealth = mistDragonHealth - strongAttack;
            } else {
                print("\n\n\n\nYou missed the attack")
            }
            Fun.threadSleep(1000)
        }

        if (input == "3") {
            print("\n\n\n\nyou healed", heal, "health")
            playerHealth = playerHealth + heal;
            Fun.threadSleep(1000)
        }

    }



    if (screen == "Mist Dragon Boss" && playerHealth < 1) {
        print("\n\n__   __           ______ _          _")
        print("\\ \\ / /           |  _  (_)        | |")
        print(" \\ V /___  _   _  | | | |_  ___  __| |")
        print("  \\ // _ \\| | | | | | | | |/ _ \\/ _` |")
        print("  | | (_) | |_| | | |/ /| |  __/ (_| |")
        print("  \\_/\\___/ \\__,_| |___/ |_|\\___|\\__,_|")
        gameOver = true
    }

    if (screen == "Mist Dragon Boss" && mistDragonHealth < 1) {



        screen = "Ending"

    }




    if (screen == "Ending") {



        let stopAmount = 500

        print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                                                                             __   __   ___    _   _          __      __ ___    _  _  ")
        print("                                                                                             \\ \\ / /  / _ \\  | | | |    o O O\\ \\    / /|_ _|  | \\| |")
        print("                                                                                              \\ V /  | (_) | | |_| |   o      \\ \\/\\/ /  | |   | .` |")
        print("                                                                                              _|_|_   \\___/   \\___/   TS__[O]  \\_/\\_/  |___|  |_|\\_|")
        print("                                                                                            _| --- |_|-----|_|-----| {======|_|-----|_|-----|_|-----|")
        print("                                                                                            -`-0-0-'-`-0-0-'-`-0-0-'./o--000'-`-0-0-'-`-0-0-'-`-0-0-'")

        Fun.threadSleep(stopAmount)
        print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                                                                           __   __   ___    _   _          __      __ ___    _  _  ")
        print("                                                                                         \\ \\ / /  / _ \\  | | | |    o O O\\ \\    / /|_ _|  | \\| |")
        print("                                                                                          \\ V /  | (_) | | |_| |   o      \\ \\/\\/ /  | |   | .` |")
        print("                                                                                          _|_|_   \\___/   \\___/   TS__[O]  \\_/\\_/  |___|  |_|\\_|")
        print("                                                                                        _| --- |_|-----|_|-----| {======|_|-----|_|-----|_|-----|")
        print("                                                                                        -`-0-0-'-`-0-0-'-`-0-0-'./o--000'-`-0-0-'-`-0-0-'-`-0-0-'")
        Fun.threadSleep(stopAmount)
        print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                                                                       __   __   ___    _   _          __      __ ___    _  _  ")
        print("                                                                                     \\ \\ / /  / _ \\  | | | |    o O O\\ \\    / /|_ _|  | \\| |")
        print("                                                                                      \\ V /  | (_) | | |_| |   o      \\ \\/\\/ /  | |   | .` |")
        print("                                                                                      _|_|_   \\___/   \\___/   TS__[O]  \\_/\\_/  |___|  |_|\\_|")
        print("                                                                                    _| --- |_|-----|_|-----| {======|_|-----|_|-----|_|-----|")
        print("                                                                                    -`-0-0-'-`-0-0-'-`-0-0-'./o--000'-`-0-0-'-`-0-0-'-`-0-0-'")
        Fun.threadSleep(stopAmount)
        print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                                                                    __   __   ___    _   _          __      __ ___    _  _  ")
        print("                                                                                   \\ \\ / /  / _ \\  | | | |    o O O\\ \\    / /|_ _|  | \\| |")
        print("                                                                                    \\ V /  | (_) | | |_| |   o      \\ \\/\\/ /  | |   | .` |")
        print("                                                                                    _|_|_   \\___/   \\___/   TS__[O]  \\_/\\_/  |___|  |_|\\_|")
        print("                                                                                  _| --- |_|-----|_|-----| {======|_|-----|_|-----|_|-----|")
        print("                                                                                  -`-0-0-'-`-0-0-'-`-0-0-'./o--000'-`-0-0-'-`-0-0-'-`-0-0-'")
        Fun.threadSleep(stopAmount)
        print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                                                                  __   __   ___    _   _          __      __ ___    _  _  ")
        print("                                                                                 \\ \\ / /  / _ \\  | | | |    o O O\\ \\    / /|_ _|  | \\| |")
        print("                                                                                  \\ V /  | (_) | | |_| |   o      \\ \\/\\/ /  | |   | .` |")
        print("                                                                                  _|_|_   \\___/   \\___/   TS__[O]  \\_/\\_/  |___|  |_|\\_|")
        print("                                                                                _| --- |_|-----|_|-----| {======|_|-----|_|-----|_|-----|")
        print("                                                                                -`-0-0-'-`-0-0-'-`-0-0-'./o--000'-`-0-0-'-`-0-0-'-`-0-0-'")
        Fun.threadSleep(stopAmount)
        print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                                                                __   __   ___    _   _          __      __ ___    _  _  ")
        print("                                                                               \\ \\ / /  / _ \\  | | | |    o O O\\ \\    / /|_ _|  | \\| |")
        print("                                                                                \\ V /  | (_) | | |_| |   o      \\ \\/\\/ /  | |   | .` |")
        print("                                                                                _|_|_   \\___/   \\___/   TS__[O]  \\_/\\_/  |___|  |_|\\_|")
        print("                                                                              _| --- |_|-----|_|-----| {======|_|-----|_|-----|_|-----|")
        print("                                                                              -`-0-0-'-`-0-0-'-`-0-0-'./o--000'-`-0-0-'-`-0-0-'-`-0-0-'")
        Fun.threadSleep(stopAmount)
        print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                                                              __   __   ___    _   _          __      __ ___    _  _  ")
        print("                                                                             \\ \\ / /  / _ \\  | | | |    o O O\\ \\    / /|_ _|  | \\| |")
        print("                                                                              \\ V /  | (_) | | |_| |   o      \\ \\/\\/ /  | |   | .` |")
        print("                                                                              _|_|_   \\___/   \\___/   TS__[O]  \\_/\\_/  |___|  |_|\\_|")
        print("                                                                             _| --- |_|-----|_|-----| {======|_|-----|_|-----|_|-----|")
        print("                                                                             -`-0-0-'-`-0-0-'-`-0-0-'./o--000'-`-0-0-'-`-0-0-'-`-0-0-'")
        Fun.threadSleep(stopAmount)
        print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                                                            __   __   ___    _   _          __      __ ___    _  _  ")
        print("                                                                           \\ \\ / /  / _ \\  | | | |    o O O\\ \\    / /|_ _|  | \\| |")
        print("                                                                            \\ V /  | (_) | | |_| |   o      \\ \\/\\/ /  | |   | .` |")
        print("                                                                            _|_|_   \\___/   \\___/   TS__[O]  \\_/\\_/  |___|  |_|\\_|")
        print("                                                                          _| --- |_|-----|_|-----| {======|_|-----|_|-----|_|-----|")
        print("                                                                          -`-0-0-'-`-0-0-'-`-0-0-'./o--000'-`-0-0-'-`-0-0-'-`-0-0-'")
        Fun.threadSleep(stopAmount)
        print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                                                          __   __   ___    _   _          __      __ ___    _  _  ")
        print("                                                                         \\ \\ / /  / _ \\  | | | |    o O O\\ \\    / /|_ _|  | \\| |")
        print("                                                                          \\ V /  | (_) | | |_| |   o      \\ \\/\\/ /  | |   | .` |")
        print("                                                                          _|_|_   \\___/   \\___/   TS__[O]  \\_/\\_/  |___|  |_|\\_|")
        print("                                                                        _| --- |_|-----|_|-----| {======|_|-----|_|-----|_|-----|")
        print("                                                                        -`-0-0-'-`-0-0-'-`-0-0-'./o--000'-`-0-0-'-`-0-0-'-`-0-0-'")
        Fun.threadSleep(stopAmount)
        print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                                                        __   __   ___    _   _          __      __ ___    _  _  ")
        print("                                                                       \\ \\ / /  / _ \\  | | | |    o O O\\ \\    / /|_ _|  | \\| |")
        print("                                                                        \\ V /  | (_) | | |_| |   o      \\ \\/\\/ /  | |   | .` |")
        print("                                                                        _|_|_   \\___/   \\___/   TS__[O]  \\_/\\_/  |___|  |_|\\_|")
        print("                                                                      _| --- |_|-----|_|-----| {======|_|-----|_|-----|_|-----|")
        print("                                                                      -`-0-0-'-`-0-0-'-`-0-0-'./o--000'-`-0-0-'-`-0-0-'-`-0-0-'")
        Fun.threadSleep(stopAmount)
        print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                                                      __   __   ___    _   _          __      __ ___    _  _  ")
        print("                                                                     \\ \\ / /  / _ \\  | | | |    o O O\\ \\    / /|_ _|  | \\| |")
        print("                                                                      \\ V /  | (_) | | |_| |   o      \\ \\/\\/ /  | |   | .` |")
        print("                                                                      _|_|_   \\___/   \\___/   TS__[O]  \\_/\\_/  |___|  |_|\\_|")
        print("                                                                    _| --- |_|-----|_|-----| {======|_|-----|_|-----|_|-----|")
        print("                                                                    -`-0-0-'-`-0-0-'-`-0-0-'./o--000'-`-0-0-'-`-0-0-'-`-0-0-'")
        Fun.threadSleep(stopAmount)
        print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                                                  __   __   ___    _   _          __      __ ___    _  _  ")
        print("                                                                 \\ \\ / /  / _ \\  | | | |    o O O\\ \\    / /|_ _|  | \\| |")
        print("                                                                  \\ V /  | (_) | | |_| |   o      \\ \\/\\/ /  | |   | .` |")
        print("                                                                  _|_|_   \\___/   \\___/   TS__[O]  \\_/\\_/  |___|  |_|\\_|")
        print("                                                                _| --- |_|-----|_|-----| {======|_|-----|_|-----|_|-----|")
        print("                                                                -`-0-0-'-`-0-0-'-`-0-0-'./o--000'-`-0-0-'-`-0-0-'-`-0-0-'")
        Fun.threadSleep(stopAmount)
        print(" \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                                             __   __   ___    _   _          __      __ ___    _  _  ")
        print("                                                             \\ \\ / /  / _ \\  | | | |    o O O\\ \\    / /|_ _|  | \\| |")
        print("                                                              \\ V /  | (_) | | |_| |   o      \\ \\/\\/ /  | |   | .` |")
        print("                                                              _|_|_   \\___/   \\___/   TS__[O]  \\_/\\_/  |___|  |_|\\_|")
        print("                                                            _| --- |_|-----|_|-----| {======|_|-----|_|-----|_|-----|")
        print("                                                            -`-0-0-'-`-0-0-'-`-0-0-'./o--000'-`-0-0-'-`-0-0-'-`-0-0-'")

        Fun.threadSleep(stopAmount)
        print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                                          __   __   ___    _   _          __      __ ___    _  _  ")
        print("                                                         \\ \\ / /  / _ \\  | | | |    o O O\\ \\    / /|_ _|  | \\| |")
        print("                                                          \\ V /  | (_) | | |_| |   o      \\ \\/\\/ /  | |   | .` |")
        print("                                                          _|_|_   \\___/   \\___/   TS__[O]  \\_/\\_/  |___|  |_|\\_|")
        print("                                                        _| --- |_|-----|_|-----| {======|_|-----|_|-----|_|-----|")
        print("                                                        -`-0-0-'-`-0-0-'-`-0-0-'./o--000'-`-0-0-'-`-0-0-'-`-0-0-'")
        Fun.threadSleep(stopAmount)
        print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                                      __   __   ___    _   _          __      __ ___    _  _  ")
        print("                                                     \\ \\ / /  / _ \\  | | | |    o O O\\ \\    / /|_ _|  | \\| |")
        print("                                                      \\ V /  | (_) | | |_| |   o      \\ \\/\\/ /  | |   | .` |")
        print("                                                      _|_|_   \\___/   \\___/   TS__[O]  \\_/\\_/  |___|  |_|\\_|")
        print("                                                    _| --- |_|-----|_|-----| {======|_|-----|_|-----|_|-----|")
        print("                                                    -`-0-0-'-`-0-0-'-`-0-0-'./o--000'-`-0-0-'-`-0-0-'-`-0-0-'")
        Fun.threadSleep(stopAmount)
        print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                                  __   __   ___    _   _          __      __ ___    _  _  ")
        print("                                                 \\ \\ / /  / _ \\  | | | |    o O O\\ \\    / /|_ _|  | \\| |")
        print("                                                  \\ V /  | (_) | | |_| |   o      \\ \\/\\/ /  | |   | .` |")
        print("                                                  _|_|_   \\___/   \\___/   TS__[O]  \\_/\\_/  |___|  |_|\\_|")
        print("                                                _| --- |_|-----|_|-----| {======|_|-----|_|-----|_|-----|")
        print("                                                -`-0-0-'-`-0-0-'-`-0-0-'./o--000'-`-0-0-'-`-0-0-'-`-0-0-'")
        Fun.threadSleep(stopAmount)

        print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                              __   __   ___    _   _          __      __ ___    _  _  ")
        print("                                             \\ \\ / /  / _ \\  | | | |    o O O\\ \\    / /|_ _|  | \\| |")
        print("                                              \\ V /  | (_) | | |_| |   o      \\ \\/\\/ /  | |   | .` |")
        print("                                              _|_|_   \\___/   \\___/   TS__[O]  \\_/\\_/  |___|  |_|\\_|")
        print("                                            _| --- |_|-----|_|-----| {======|_|-----|_|-----|_|-----|")
        print("                                            -`-0-0-'-`-0-0-'-`-0-0-'./o--000'-`-0-0-'-`-0-0-'-`-0-0-'")

        Fun.threadSleep(stopAmount)
        print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                          __   __   ___    _   _          __      __ ___    _  _  ")
        print("                                         \\ \\ / /  / _ \\  | | | |    o O O\\ \\    / /|_ _|  | \\| |")
        print("                                          \\ V /  | (_) | | |_| |   o      \\ \\/\\/ /  | |   | .` |")
        print("                                          _|_|_   \\___/   \\___/   TS__[O]  \\_/\\_/  |___|  |_|\\_|")
        print("                                        _| --- |_|-----|_|-----| {======|_|-----|_|-----|_|-----|")
        print("                                        -`-0-0-'-`-0-0-'-`-0-0-'./o--000'-`-0-0-'-`-0-0-'-`-0-0-'")

        Fun.threadSleep(stopAmount)
        print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                     __   __   ___    _   _          __      __ ___    _  _  ")
        print("                                    \\ \\ / /  / _ \\  | | | |    o O O\\ \\    / /|_ _|  | \\| |")
        print("                                     \\ V /  | (_) | | |_| |   o      \\ \\/\\/ /  | |   | .` |")
        print("                                     _|_|_   \\___/   \\___/   TS__[O]  \\_/\\_/  |___|  |_|\\_|")
        print("                                   _| --- |_|-----|_|-----| {======|_|-----|_|-----|_|-----|")
        print("                                   -`-0-0-'-`-0-0-'-`-0-0-'./o--000'-`-0-0-'-`-0-0-'-`-0-0-'")

        Fun.threadSleep(stopAmount)
        print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                __   __   ___    _   _          __      __ ___    _  _  ")
        print("                               \\ \\ / /  / _ \\  | | | |    o O O\\ \\    / /|_ _|  | \\| |")
        print("                                \\ V /  | (_) | | |_| |   o      \\ \\/\\/ /  | |   | .` |")
        print("                                _|_|_   \\___/   \\___/   TS__[O]  \\_/\\_/  |___|  |_|\\_|")
        print("                              _| --- |_|-----|_|-----| {======|_|-----|_|-----|_|-----|")
        print("                             -`-0-0-'-`-0-0-'-`-0-0-'./o--000'-`-0-0-'-`-0-0-'-`-0-0-'")

        Fun.threadSleep(stopAmount)

        print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                          __   __   ___    _   _          __      __ ___    _  _  ")
        print("                         \\ \\ / /  / _ \\  | | | |    o O O\\ \\    / /|_ _|  | \\| |")
        print("                          \\ V /  | (_) | | |_| |   o      \\ \\/\\/ /  | |   | .` |")
        print("                          _|_|_   \\___/   \\___/   TS__[O]  \\_/\\_/  |___|  |_|\\_|")
        print("                        _| --- |_|-----|_|-----| {======|_|-----|_|-----|_|-----|")
        print("                          -`-0-0-'-`-0-0-'-`-0-0-'./o--000'-`-0-0-'-`-0-0-'-`-0-0-'")

        gameOver = true
    }




















    //shop




    if (screen == "shop") {


        print("\n                ______________")
        print("    __,.,---'''''              '''''---..._")
        print(" ,-'             .....:::''::.:            '`-.")
        print("'           ...:::.....       '")
        print("            ''':::'''''       .               ,")
        print("|'-.._           ''''':::..::':          __,,-")
        print(" '-.._''`---.....______________.....---''__,,-")
        print("      ''`---.....______________.....---''")

        print("\n\n\nHey", playerName, "What do you want do?")

        print("\n\nStrength:", strength, "\nMax Health:", maxPlayerHealth, "\nYou have", coins, "coins", "\n\n(1) Upgrade strength COSTS: ", storeCostStrength, "\n(2) Upgrade health COSTS: ", storeCostHealth, "\n(3)Reset Misty strength COSTS:", mistyStrength, "\n(4) Go back")

        input = getInput();

        if (input == "1") {

            screen = "Upgrade Strength";
        }

        if (input == "2") {

            screen = "Upgrade Health";


        }

        if (input == "3") {

            screen = "Reset Misty Strength"
        }

        if (input == "4") {

            screen = "Main hub";
        }
    }

    if (screen == "Reset Misty Strength" && coins >= mistyStrength) {

        print("\nAre you sure you want to reset Misty strength level?\n This will result in lower leveled enemies that give low amounts of coins.")

        print("\n(1)Yes\n(2)No go back")

        input = getInput();

        if (input == "1") {

            print("Misty Strength level have been resetted")

            mistyStrength = 75

            coins = coins - mistyStrength

            Fun.threadSleep(1000)

            screen = "shop"
        }
    } else if (screen == "Reset Misty Strength" && coins < mistyStrength) {

        print("You don't have enough coins")

        Fun.threadSleep(1000)

        screen = "shop"
    }

    if (screen == "Upgrade Strength" && coins >= storeCostStrength) {

        coins = coins - storeCostStrength;
        strength = strength + 25
        storeCostStrength = storeCostStrength + 35

        print("\n\nYour strength is now", strength)
        print("You have", coins, "coins")

        Fun.threadSleep(1000)

        screen = "shop"

    } else if (screen == "Upgrade Strength" && coins < storeCostStrength) {

        print("\n\nYou don't have enough coins")
        Fun.threadSleep(1000)

        screen = "shop"
    }

    if (screen == "Upgrade Health" && coins >= storeCostHealth) {

        coins = coins - storeCostHealth;
        maxPlayerHealth = maxPlayerHealth + 25
        storeCostHealth = storeCostHealth + 25

        print("\n\nYour max health is now", storeCostHealth)
        print("You have", coins, "coins")

        Fun.threadSleep(1000)

        screen = "shop"

    } else if (screen == "Upgrade Health" && coins < storeCostHealth) {

        print("\n\nYou don't have enough coins")
        Fun.threadSleep(1000)

        screen = "shop"
    }






    //Misty Forest





    if (screen == "Misty Forest Entrance") {


        print("  ______ ______ ______ ______ ______ ______ ______ ______      ")
        print(" |______|______|______|______|______|______|______|______|     ")
        print(" | |  \\/  (_)   | |         |  ____|                | | | |    ")
        print(" | | \\  / |_ ___| |_ _   _  | |__ ___  _ __ ___  ___| |_| |    ")
        print(" | | |\\/| | / __| __| | | | |  __/ _ \\| '__/ _ \\/ __| __| |    ")
        print(" | | |  | | \\__ \\ |_| |_| | | | | (_) | | |  __/\\__ \\ |_| |    ")
        print(" | |_|  |_|_|___/\\__|\\__, | |_|  \\___/|_|  \\___||___/\\__| |    ")
        print(" | |                  __/ |                             | |    ")
        print(" |_|    ____  _______|___/      __     _____  ______ _  |_|    ")
        print(" | |   |  _ \\|  ____\\ \\        / /\\   |  __ \\|  ____| | | |    ")
        print(" | |   | |_) | |__   \\ \\  /\\  / /  \\  | |__) | |__  | | | |    ")
        print(" | |   |  _ <|  __|   \\ \\/  \\/ / /\\ \\ |  _  /|  __| | | | |    ")
        print(" | |   | |_) | |____   \\  /\\  / ____ \\| | \\ \\| |____|_| | |    ")
        print(" | |   |____/|______|   \\/  \\/_/    \\_\\_|  \\_\\______(_) | |    ")
        print(" | |                                                    | |  ")
        print(" |_|____ ______ ______ ______ ______ ______ ______ _____|_|")
        print(" |______|______|______|______|______|______|______|______| ")

        print("\n(1)Go in \n(2)Go back")

        input = getInput();

        if (input == "1") {

            screen = "Misty Forest Crossroads CHECK";
        }

        if (input == "2") {

            screen = "Main hub";
        }

    }







    if (screen == "Misty Forest Crossroads CHECK") {

        fightChance = Math.random();

        if (fightChance <= 0.25) {

            nextScreen = "Misty Forest Crossroads";

            screen = "Misty Fight"




        }

        if (fightChance > 0.25) {

            screen = "Misty Forest Crossroads"

        }
    }

    if (screen == "Misty Forest Crossroads") {


        print("\nYou think there two paths to take, one on your left and one on your right. You do not know what each path contain")
        print("\n(1)Go left \n(2)Go right \n(3)Go back to entrance")

        input = getInput();

        if (input == "1") {

            screen = "Left path CHECK";
        }

        if (input == "2") {

            screen = "Right path CHECK"
        }

        if (input == "3") {

            screen = "Misty Forest Entrance"
        }
    }





    // Left Path


    if (screen == "Left path CHECK") {

        fightChance = Math.random();



        if (fightChance <= 0.25) {

            nextScreen = "Left path";

            screen = "Misty Fight"




        }

        if (fightChance > 0.25) {

            screen = "Left path"

        }
    }

    if (screen == "Left path") {


        print("\n\nPY?5G?JP5G?~!75PB&!YGY?!P5!~755PJ77J??Y??JJ7??J7!7!~7?!?Y?JJ?77~~~J?~7~!JBB~!Y?G7G@P!JJP7Y&G!~~~!?JP")
        print("7?YP#G?7YBP7Y7~G@#PY77P5?!!YGPJ?J55Y5YJ?Y?JPBY?5PJ577Y?!?55?PG7J??!J?J~~~?&P~J5B?&&5?7~PB&B?~!!~7?YJ")
        print("Y55Y5GBPJYBPJ?7#&P7!!PY!JPGG5555PGB5??JYJ7YYB#YJP5PPYYYJYYG??PPYP5!?J5!7Y?Y&GJ7PB@#!~~?&&Y!Y7JJ!7?7!")
        print("YYY555BB#B#&P7P@G^YYGGPPY7JP5Y7J5B#J!YY7?JYJ?P#PYJ?5PGGPGB#PGYB#PYPP~5GJYYPP&P~~B@5^7G&&P??PYY7!7?~~")
        print("JYPYY?GG55JY##&&PYPB&#PYYYYYJJYYYYB##J~~!GY7?75#5!!!!!7!PBYJ?JYPB#B#GGG&&#J!J##?G@PY&@BJ55JGPY?7!J7!")
        print("!5P?JPBGY!!7Y&@&&#G5JJ7?777!!7777?JYG#B5?5BJ~~~JB5!~~~~YB57!!77!?5BY7JBGYG##57G&&&&@&YJPP5PGJJY?!J7!")
        print("~YBJY#B?~!!!!#@&GJJ?7???7?7!7J??7?7!7?5B###&G5JJP&B55YG#GY!~7J7!!~7PP?GY^~!5&&#&&&&&J~!#PGP!~~!JYY?~")
        print("JY5YPB!~~~~~P&@B?!Y77JJ??Y?7!!J?J7!!!~~!7?J55GB###&&&###B5J?7!~~~~~~?G#G!~~~!Y#@&&@B~~J#P?~~~~~~7YY?")
        print("Y7~G#P~~~~~Y&&&??YY~~7Y!7Y?~~?Y?~~~~~~~~~~~~~~!!7?Y5G#####G7~~~~~~~~~~7PBY!~~~!B@&@B7PG?~~~~~~~~~J55")
        print("!~~J&P~~~~PB#@#!~J5?~!Y7~!JJJ5?~~~~~~~~~~~~~~~~~~~~~~7JG##&G7~~~~~~~~~~~?PBPJ?!!#&&&#Y~~~~~~~~~~~?5J")
        print("~~~!BP~7YGP7#@G~~~?57!Y7~~755?~~~~~~~~~~~~~~~~~~~~~~~~~~YPG##5!~~~~~~~~~~~7P###B#&&@P~~~~~~~~~~~!Y57")
        print("~~~~P#P#5!~?&@J~~~~JYYJ~~7YY7~~~~~~~~~~~~~~~~~~~~~~~~~~~JJ!?B&G7~~~~~~~~~~~~7####&&&#!~~~~~~~~~!J5Y!")
        print("~~~~P&#J~~~P@&!~~~~!Y57~7YY7~~~~~~~~~~~~~~~~~~~~~~~~~~~!YY!~!B&B7~~~~~~~~~~~~?###GB@&Y~~~~~~~~!J55J~")
        print("~~~~G&#!~~7&@G~~~~~~?57~J57~~~~~~~~~~~~~~~~~~~~~~~~~~~!J5?~~~?B&B7~~~~~~~~~~~~G##Y7&&&!~~~~~~!Y555?~")
        print("~~~5#B#5~~B@&7~~~~~!YJ!7Y5!~~~~~~~~~~~~~~~~~~~~!!!!7??Y5?~~~~~!G&#J~~~~~~~~~~~P##P~5@@P!77?JJYYYYY7~")
        print("77Y#B5B#YJ&@G~~~!!!JY?7Y55?!!~!!!!!!7777777?JJYYYY55YYYY?!!777!?###5!!777??JY5####55&&&PYYY55555555?")
        print("#########&&&#YYY555555YYYYYYYYY55PPGGGGGGGPPP55555555555PPGGGBB#####BGGGGB#########&&&&&#BBB########")
        print("####&&&&&&&&&#########BGGGBBB#################################################&&&&&&&&&&&&&&########")


        print("\nThere is a straight path to follow but you are surrounded by trees of the Misty Forest.\nYou wonder if there's anything off the path. Maybe something that could help you.");

        print("\n(1)Do you go into the trees \n(2)stay on path \n(3)Go back to the crossroads");
        input = getInput();

        if (input == "1") {

            screen = "into the trees"
        }

        if (input == "2") {

            screen = "Giant Lake"
        }

        if (input == "3") {

            screen = "Misty Forest Crossroads CHECK"
        }
    }



    if (screen == "into the trees") {


        print("\n      _____")
        print("     `.___,'")
        print("      (___)")
        print("      <   >")
        print("       ) (")
        print("      /`-.\\")
        print("     /     \\")
        print("    / _    _\\")
        print("   :,' `-.' `:")
        print("   |         |")
        print("   :         ;")
        print("    \       /")
        print("     `.___.' ")



        print("\nYou explore into the trees and found an item called the tree immobilizer on top a dead tree. You take the item.")
        print("\nNow what do you want to do?")
        treeImmobilizer = true;
        print("\n(1)Go back to Left Entrance \n(2)explore more")
        input = getInput();

        if (input == "1") {
            screen = "Left path CHECK";
        }

        if (input == "2") {
            screen = "death"
        }
    }





    //or


    //Giant Lake




    if (screen == "Giant Lake" && treeEssence == false || screen == "Giant Lake" && dungeonKey == true) {

        print("\nYou find this giant lake with clear water in it.");
        print("\n\n              ,.  _~-.,               .					");
        print("           ~.`_ \\/,_. \\_						");
        print("          / ,,_>@`,__`~.)             |           .			");
        print("          | |  @@@@.  :,! .           .          .			");
        print("          |/   ^^@     .!  \\          |         /			");
        print("          `. .^^^     ,.    .         |        .             .		");
        print("           .^^^   .          \\                /          .		");
        print("          .^^^       .  .     \\       |      /       . .		");
        print(".,.,.     ^^^             ` .   .,+~.`^`.~+,.     , .			");
        print("&&&&&&,  ,^^^^.  . ._ ..__ _  ..             .. ._ __ ____ __ _ .. .  .  ");
        print("%%%%%%%%%^^^^^^%%&&;_,.-=~.`^`.~=-.,__,.-=~.`^`.~=-.,__,.-=~.`^`.~=-.,   ");
        print("&&&&&%%%%%%%%%%%%%%%%%%&&;,.-=~.`^`.~=-.,__,.-=~.`^`.~=-.,__,.-=~.`^`.~= ");
        print("%%%%%&&&&&&&&&&&%%%%&&&_,.;^`.~=-.,__,.-=~.`^`.~=-.,__,.-=~.`^`.~=-.,__, ");
        print("%%%%%%%%%&&&&&&&&&-=~.`^`.~=-.,__,.-=~.`^`.~=-.,__,.-==--^.~=-.,__,.-=~. ");
        print("##mjy#####*:.								");
        print("_,.-=~.`^`.~=-.,__,.-=~.`^`.~=-.,__,.-=~.`^`.~=-.,.-=~.`^`.~=-.,__,.-=~. ");
        print("										");
        print("~`.^`.~=-.,__,.-=~.`^`.~=-.,__,.-=~.`^`.~=-.,__,.-=~.`^`.~=-.,__,.-=~.`^ ");

        print("\n(1)Drink the water  \n(2)swim to continue \n(3)explore the water \n(4)Go back");
        input = getInput();

        if (input == "1") {

            screen = "death";
        }

        if (input == "2") {
            print("\nYou swim across the entire lake but you realize you suck at swimming so you go back to the shore.");
            Fun.threadSleep(1000);
        }

        if (input == "3") {

            screen = "explore lake"



        }

        if (input == "4") {

            screen = "Left path CHECK"
        }

    } else if (screen == "Giant Lake" && treeEssence == true && dungeonKey == false) {

        print("\nYou find this giant lake with clear water in it.");
        print("\n\n              ,.  _~-.,               .					");
        print("           ~.`_ \\/,_. \\_						");
        print("          / ,,_>@`,__`~.)             |           .			");
        print("          | |  @@@@.  :,! .           .          .			");
        print("          |/   ^^@     .!  \\          |         /			");
        print("          `. .^^^     ,.    .         |        .             .		");
        print("           .^^^   .          \\                /          .		");
        print("          .^^^       .  .     \\       |      /       . .		");
        print(".,.,.     ^^^             ` .   .,+~.`^`.~+,.     , .			");
        print("&&&&&&,  ,^^^^.  . ._ ..__ _  ..             .. ._ __ ____ __ _ .. .  .  ");
        print("%%%%%%%%%^^^^^^%%&&;_,.-=~.`^`.~=-.,__,.-=~.`^`.~=-.,__,.-=~.`^`.~=-.,   ");
        print("&&&&&%%%%%%%%%%%%%%%%%%&&;,.-=~.`^`.~=-.,__,.-=~.`^`.~=-.,__,.-=~.`^`.~= ");
        print("%%%%%&&&&&&&&&&&%%%%&&&_,.;^`.~=-.,__,.-=~.`^`.~=-.,__,.-=~.`^`.~=-.,__, ");
        print("%%%%%%%%%&&&&&&&&&-=~.`^`.~=-.,__,.-=~.`^`.~=-.,__,.-==--^.~=-.,__,.-=~. ");
        print("##mjy#####*:.								");
        print("_,.-=~.`^`.~=-.,__,.-=~.`^`.~=-.,__,.-=~.`^`.~=-.,.-=~.`^`.~=-.,__,.-=~. ");
        print("										");
        print("~`.^`.~=-.,__,.-=~.`^`.~=-.,__,.-=~.`^`.~=-.,__,.-=~.`^`.~=-.,__,.-=~.`^ ");

        print("\n(1)Drink the water  \n(2)swim to continue \n(3)explore the water \n(4)Go back \n(5)Drop Tree essence into the lake");
        input = getInput();

        if (input == "1") {

            screen = "death";
        }

        if (input == "2") {
            print("\nYou swim across the entire lake but you realize you suck at swimming so you go back to the shore.");
            Fun.threadSleep(2000);
        }

        if (input == "3") {

            screen = "explore lake";



        }

        if (input == "4") {

            screen = "Left path CHECK";
        }

        if (input == "5") {

            screen = "Getting dungeon key";
        }

    }



    if (screen == "Getting dungeon key") {

        print("\n  ad8888888888ba")
        print(" dP'         `\"8b,")
        print(" 8  ,aaa,       \"Y888a     ,aaaa,     ,aaa,  ,aa,")
        print(" 8  8' `8           \"88baadP\"\"\"\"YbaaadP\"\"\"YbdP\"\"Yb")
        print(" 8  8   8              \"\"\"        \"\"\"      \"\"    8b")
        print(" 8  8, ,8         ,aaaaaaaaaaaaaaaaaaaaaaaaddddd88P")
        print(" 8  `\"\"\"'       ,d8\"\"")
        print(" Yb,         ,ad8\"")
        print("  \"Y8888888888P\"")

        print("\nYou drop the tree essence into the, the lake started to shake and it spit out the key that opens some door.")

        print("\nYou should find out where it goes.")

        dungeonKey = true

        Fun.threadSleep(3000)

        screen = "Giant Lake";

    }

    if (screen == "explore lake") {

        print("While exploring the water you find this sea monster lurking at the bottom of the sea");

        print("\n(1)Interact with the sea monster \n(2)go back to the shore");

        input = getInput();

        if (input == "1") {
            screen = "sea monster"
        }
        if (input == "2") {

            screen = "Giant Lake"
        }
    }





    //sea monster




    if (screen == "sea monster") {


        print("                                             oo")
        print("                                            o\"  $")
        print("                                          \" o   $")
        print("                                         \"      $")
        print("                                        $      $$ ")
        print("                                        o\"     \"$o ")
        print("   $oo                                  $     \"$$$")
        print("   $\"$oo                               \"      \"o$$ ")
        print("  \"$$o$\"o\"o                          o\"      $\"$$$")
        print("     \"\"\"o\"$o\"\"\"\"\"\"\"\" \"\"\" oo ooooooo\"\"\"     o\"\"o$$$")
        print("          \"$$ o                            o\"\"$$$")
        print("    oooo$$$$$$$$oo\"o o                 o \"o \"o \"\"oo")
        print("  \"$$$$$$$$$$\"\"\"\"$$$$o\"o$ o o o  \"o \" $\"$o$$oo\"o  $\"o")
        print("   \"$$$$$$\"         \"\"$$o$o$ $ \"ooo$o$o$$$$$$\"$o$o $\"$o")
        print("   \"$\"\"                 \"\"\"\"$$$$$o$$$$$$$$$     \"$o$$$$o")
        print("   \"                           \" \"\" \"  \"$$$$       \" $$$o")
        print("                                         \"$$$         \"\"\"")
        print("                                           \"\"$")

        print("\nYou go to the sea monster and it seems to be friendly. It also tells you something")

        print("\n\"If you have some special tree essence, you should drop it into this lake and it will spit out a key to a dungeon deep into Misty Forest\"")



        print("\n(1) How do I get tree essence \n(2)Why are you telling me this \n(3)Go back to the shore")

        input = getInput();

        if (input == "1") {

            screen = "How do I get it"
        }

        if (input == "2") {

            screen = "Why are you telling me this"
        }

        if (input == "3") {

            screen = "Giant Lake"
        }
    }


    if (screen == "How do I get it") {

        print("You ask how and where you get this special essence.")

        print("\nThe sea monster replies \n\“You have to kill one of the Misty forest trees and not any ordinary tree, a tree that can move, good luck finding one.\”")

        Fun.threadSleep(5000)

        screen = "sea monster"
    }

    if (screen == "Why are you telling me this") {

        print("You ask the sea monster why it is telling you this.")

        print("\nThey reply: \n\“Well the forest has been cursed by the Mist Dragon, it controls everything in this forest. From the trees, to the Misties, pretty much anything.\nExcept me, not even I know why the Mist dragons effect doesn’t impact me, but at least I can live my own life. I just hope me telling you this \”")
        Fun.threadSleep(7000)

        screen = "sea monster"
    }


    // Right Path

    if (screen == "Right path CHECK") {

        fightChance = Math.random();



        if (fightChance <= 0.25) {

            nextScreen = "Right path";

            screen = "Misty Fight"




        }

        if (fightChance > 0.25) {

            screen = "Right path"

        }



    }


    if (screen == "Right path") {

        print("\n\n&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
        print("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
        print("####&&&&&&&&##&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&#")
        print("#B##B######&#P#&&BB##&&&&&&&&##&&&&&#B####&#&####B#####&&&&&&&&&&&&&#&&&&&&&&&&&&&&&&&&&###&&#####BB")
        print("GGBGBB#BGBGP&#&&BGB#&&##B#BBGGGPGBB###BBB##B#B####BB##GG#BGGGGGB#&&&&&&&&&#B#&&##&&#&&&BB#####B#BGBB")
        print("7PGY5G#BGPPYP&&&&&BG55P5Y5555Y55YYPPBBBG5PBB555G#BGG55YGBPY555Y5PG#BGG#BBB&&#B#&&&&&&BGGBGBBPPPP55?~")
        print(":5BJJ#G7!7?J?#&&PYY5Y5P555Y5P55PPP555Y5GBBB#BP55P#B5?YG#G5Y5PYY5Y55PBGBGY5YB&&&&&&&&GY5#BBB55YYYY5!.")
        print("?55?5G^:::::Y&&B7~5!7Y5555YJJ?5P55Y5Y5Y5YJ?JYPGB####GB##BPYJ!~~!77^:~P#B?!77~7#&&&&B:!P#PY7777~:!557")
        print("5~:5#Y:::::J&&&!?P5:.!5^~Y?^:7P7^^!!~~^^:::::::^~!?YPB####G~.:::::::::~YB?:...:P&&@B~5P~:::::::::JPP")
        print("^::7&Y::::5B#@#::?P!:^5~.:?J?P?::::::::::::::::::::.:^7P###P~:::::::::::~5G57~^^B&&&B?:::::::::::?PJ")
        print(":::^B5.~?PY~B@5:::?P~~5~:.!PP7::::::::::::::::::::::::::YGP##Y::::::::::::~Y##BBB&&@5.::::::::::^YP!")
        print("::::5B5BJ^.~&@7.:::J55Y::~Y5!:::::::::::::::::::::::::::YY:!G&G^::::::::::::~B###&&&#:::::::::::JPY^")
        print("::::5##7.:.Y@&^::::^5P~:~P5~::::::::::::::::::::::::::::YP^.^B&G^:::::::::::.!###PB@&?::::::::^JPPJ:")
        print("::::P#B:::^&@5:::::.7P~.?P!::::::::::::::::::::::::::::?P7:::~B#G~::::::::::::P##?~&&&^::::::~YP5P7:")
        print(":::J#B#Y::G@&~:::::^YY^~5P~::::::::::::::::::::::::::~YP7.:::.:G&B7:::::::::::5##Y.J@@Y::::^?5P5P5!:")
        print("~^7#5!P#??&@P.:::::YP!^YPP7:::::^^^^~~^^:::::^^:^:^7Y5PY^^~!7!^~G##Y^~!77?J!^!B###J?&&&PYYYYP5P55557")
        print("PP#BPPPB#&&&B7~~!7J5555P555J???JY555PGP5YJYYYP5Y5Y5PP5555P5P55555###BGGPPPPPPB#####G&&&&#GP55555P555")
        print("B##G#B###&&&#GBBGGGPGGPP5555PBBGPP55G###BB######BBGPPGBBB#BGGGP55B######BPPB########&&&&&&#BGGGBBBBB")
        print("&&&&&&&&&&&&&&##########BGGB#####BGGB#########################BBBB###########B######&&&&&&&&&&&&&&&&")
        print("&&&&&&&&&&&&&&&&&&&&&#B############&&##&&&&&&&&&&&&&&#####################B#####&&&&&&&&&&&&&&&&&&&&")
        print("&&&&&&&&&&&&&&&&&&&&&&&&###&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&#############&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
        print("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&####&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
        print("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")

        print("\nThe path is super bumpy and all over the place. You hear sounds of creatures making interesting sounds. You don\’t feel safe here.");

        print("\n(1)Go back to the crossroads\n(2)keep on going")

        input = getInput();

        if (input == "1") {
            screen = "Misty Forest Crossroads CHECK"

        }

        if (input == "2") {
            screen = "tree puzzle CHECK"

        }

    }





    //tree puzzle


    if (screen == "tree puzzle CHECK") {
        fightChance = Math.random();



        if (fightChance <= 0.25) {

            nextScreen = "tree puzzle";

            screen = "Misty Fight"




        }

        if (fightChance > 0.25) {

            screen = "tree puzzle"

        }

    }

    if (screen == "tree puzzle" && treeEssence == false) {


        print("\n                      .-.-. _ _ _  |")
        print("                      /| | |(/|||||_|")
        print("                      _| | |/-'`'`'/|")
        print("                     / \\/|   o  + __.- /(")
        print("                    |  '|/| -|/(||||(_V_)")
        print("                    `._.| |/_/_)`-'' ///_<")
        print("                        >///\\\\\\\\\\//==<<<=")
        print("                      _ >>>\\\\\\>//<__<<<-'")
        print("                     / `-._>>>.-'   |<<")
        print("                    J     _.))     /<<<<")
        print("                v   |  .-'' |/__   |<<<||_")
        print("             \\\\\\||| `-> _/ / \\  `-<<<<<<*** **")
        print("           \\\\\\**|||| /    /><<\\    \\<<<********")
        print("             >>**////    /<>>>>`.   |****** <<_\\_\\")
        print("              >>***/_  .'>>><>>><\\  |*****<<<|_|_|")
        print("           .-' >***>>|/>//>><\\\\**|/\\|***<<<<<|_|_|")
        print("           \\.-' \\***<<<>>///\\\\\\******<<>><>>*****\\\\\\\\\\\\-.-.-<<<")
        print("            \\-'_.J--.<<<<>><<****>>///(\\|\\)|(//<<<,")
        print("           (   )|(-'  (>>><<****<\\\\)_.><<<<-")
        print("          .-`-'_)\\-.--.\\>>><*****//||>(\\ (\\\\_.\\<<<< .-")
        print("         .' _.-'()\\`.**>>//****<<<>><<`-``-``-`<<.-' _")
        print("     .--'_.'>>>><>>`.\\***(`._.-.<<<<<<(_____``<.'_.-' |<")
        print("    /-'   >><<>>>>>//<>>>/|\\ |  /<<>><|     `-._/      L")
        print("           ->>.<>><>>>>>/|| \\|.'|<<>\\\\|  .-----'|._    |")
        print("   .--._ >><.' \\>>>>>>///||  |  |<<>><|.'       )-----'`.")
        print("   |   _.--'    |///////\\\\\\-----'<>>>>>==\\\\<><>>>>< ===::===>>><****| .'`.`_ (   `-.   .--'")
        print("  /    .'>><>>)_ -->>>>===::::==>>******|/>>>/  `.  .--.`-.|")
        print(" /    />>>>>>>'`'`'`-`<===:::<<< *****(\\ .-.<(   )-(   )")
        print("/.'| />>>>>>>.-.-.-._\\|> =//||\\\\******-'@--'>>`-'<<\\`-'`._")
        print("   |/>>>>>>>-'`'`'`-.\\\\>>==<<<<***.'\\ |_|)_|<<<<<<< \\_ `- `.")
        print("  / >>>>>>.-..''`'`-.\\\\.->>>><<>(  /(\\\\\\/// <<<<<=    \\_ .-'")
        print(" /-' >>>----\\((::::)))// /><>>**|   (\\\\\\\\///<<<<---.")
        print("|.'  >>>| | | |\\__.'.'>>>>>****.'/ (\\\\\\\\////<<<<-`-`")
        print(" `   >>>|-|-| |>>>>>>>>>>**** .--. /_\\\\\\////<<<|_|_|<<<")
        print("     >>>|_|_|/>><>><<>*****vv(    V  `.\\\\<<<>>>|_|_|<<<<")
        print("     ////>>>>>`.>>>>******>>><`--'\\   /<<<<<>>>>><<<<<<<")
        print("     '' ///>>>>><<>>*****>>>><<<<<<`-'<<<<<<>><<<><<<<<<<")
        print("       ''    ->>>>><<>///>>>>><<<<<<\\\\\\\\\\\\><<<<<>>><<<<\\\\")
        print("               ////<<>><<<>>>><<<<>\\\\\\\\\\\\\\\\\\>><\\\\\\\\\\\\\\\\\\")
        print("              '' / ////////>>><<<\\\\\\\\\\\\\\\\\\\\<  \\\\\\ \\\\\\\\\\")
        print("                   /|| .////|||\\\\\\\\\\\\\\\\\\\\")
        print("                      (MMMMMMMMMMMMMMMMMMM)")
        print("                      |`----.MMMMMMMM.---'|")
        print("                      `---.____   ____.---'")
        print("                       |       \"\"\"    |")
        print("                       |                 |")
        print("                       |                 |")
        print("                       |                 |")
        print("                       |                 |")
        print("                       (                 )")
        print("                        `----._____.----'")


        print("\nYou find this weird looking tree in the middle of the path, it looks unnatural, \nyou try walking around it but the tree blocks your way.");;

        print("\n\n What do you do?");

        print("\n(1)Try killing it \n(2)brute force through the tree \n(3)use an item \n(4)Go back to the Right path");

        input = getInput();

        if (input == "1") {
            screen = "death";
        }
        if (input == "2") {
            screen = "death";
        }



        if (input == "3" && treeImmobilizer == true) {

            screen = "tree puzzle finished"


        } else if (input == "3" && treeImmobilizer == false) {
            screen = "Cannot use item"




        }

        if (input == "4") {

            screen = "Right path CHECK"
        }

    }


    if (screen == "Cannot use item") {

        print("You can't use any items on the tree, go and explore Misty Forest to find some items")
        Fun.threadSleep(2000)
        screen = "tree puzzle"
    }

    if (screen == "tree puzzle finished") {

        print("\n     /\\")
        print("____/_ \\____")
        print("\\  ___\\ \\  /")
        print(" \\/ /  \\/ /")
        print(" / /\\__/_/\\")
        print("/__\\ \\_____\\")
        print("    \\  /")
        print("     \\/")

        print("\nYou use the potion on the tree, the potion refiled itself by magic. The tree vanishes into dust and leaves behind its tree essence");

        print("\n\n");

        Fun.threadSleep(2000);

        treeEssence = true;



        screen = "tree puzzle";
    }





    //dungeon

    if (screen == "tree puzzle" && treeEssence == true && dungeonKey == false && dungeonGate == false) {


        print("\n\n                                       ..............                                               ")
        print("                          .:~!7?YY55PPPPPPPPBGGGGGPGGPPP555YYJ?7!~^:.                               ")
        print("                     .~?Y5PP5YJ7!~^::^^:...7:^7?J!~:?::^^^^~!!?JY55PPPYJ7^.                         ")
        print("                  ~JPBBP5J:       .:~!!!!!!J?^.J5.^?J!!~~!!~:.      .^YPPBBPY!.                     ")
        print("               :JGGJ~J^ ~?.  .^~!7??7!^:..:^7YJJ5YP7^:...:~7??7!~^.  .?~ ^J^?PBY^                   ")
        print("             .J&G7:  :!~~^^~~~!77~.    :^^:   !#@J   .^^:    .~7?7~~~^^~~!:  :!G&Y.                 ")
        print("             5@5:^5:    ..:^!J!!~^~^. !!.7Y.  :B&7   JJ:^? .^~^~!!J7^::.    ^5^:5@G.                ")
        print("            ~@57:::..::^~~~::!:7!  .^~??:::.:~!^!77^.:::!Y~^:  !7:!::~~~^::..::^7?@J                ")
        print("            7@P5GBGGGBGP5YYYY5P5555YY55GBBGBGPY5P5PGGBGGG55YYY555P5YYYY5PGGBGGBG5P@5                ")
        print("            !@?.:.:^^.:::^:::::^::::^^:..:^:.:.!@Y.:::^:::::^::::::::::^::::^:.:.7@5                ")
        print("            !@7 ...Y5....G7 . !G: ..P? . ^B~ . ^@J    YY   ^G^   YJ   !P.  .5?   !@5                ")
        print("            !@Y~~~~Y5~~!~G?~~~7B!~~~PJ~~~!G7~~~7@5~~!~5Y~~~!G!~!~55~!~?G~~~~PJ~~~J@5                ")
        print("            !@?    7J    5^   :P    Y!    P:   ^@J    ?7   .P.   7?   ^5    J!   !@5                ")
        print("            ~@?    ?J    5^   :P.   Y!    P:   ^@J    ??   .P.   7?   ^5    J!   !@5                ")
        print("            ~@?    ?J    5^   :P.   Y!    P:   :@J    ??   .P.   7?   ^5    J!   !@5                ")
        print("            ~@?    ?J    5^   :P.   Y!    P:   :@Y    ??   .P.   7?   ^5    J!   ~@5                ")
        print("            ~@J    ?J    5^   :P.   Y!    P:   :@Y    ??   .P.   7?   ^5    J!   ~@5                ")
        print("            ^@J    ?J    5^   :P.   Y!    P:   :&Y    ??   .P.   7?   ^5    J!   ~@5                ")
        print("            ^@J    7J    5~   :P..  Y!  . P:   :&Y    ?7   .P.   7? . ^5  . J! . ~@5                ")
        print("            ^@J  .:JY::  5~ .^~P^:  Y!  :^G~^. :&5  .:J?:. .P. .:?Y^. ^5  .^5?:. ~@5                ")
        print("            ^@Y    5G    5^   7&^   Y!   ^&?   .&5    5P   .P.   PP   ^5   .B5   ~@5                ")
        print("            ^@Y  .:Y5:.  5~ .:!G~:. Y! .:^G!:. .&5  .:55:. .P. .:Y5:. ^5  :^5J:. ~@5                ")
        print("            ^@Y  :.?J.:  5~ ..:P... Y! .. P:.. .&5  :.??.: .P. :.7? . ^5  . J!.. ~@P                ")
        print("            ^@Y    ?J    5^   :P.   Y!    P:   .&5    ??   .P.   7?   ^5    J!   ~@P                ")
        print("            :@5    ?J    5^   :P.   Y!    P:   .#5    ??   .P.   7?   ^5    J!   ~@P                ")
        print("            :@5    ?J    5^   :P.   Y!    P:   .#P    ??   .P.   7?   ^5    J!   ~@P                ")
        print("            :@5    ?J    5^   :P.   Y!    P:   .#P    ??   .P.   7?   ^5    J!   ~@P                ")
        print("            :&P    ?J    5^   :P.   Y!    P:   .#P    ??   .P.   7?   ^5    J!   ^@P                ")
        print("           :&P    7J    5^   :P    Y!    P:    #P    ?7   .P.   7?   ^5    J!   ^@P                ")
        print("            :&G::::JY::::P!:::~G^:::57:::^G~::::#G..:.J?.::^G^::.?J.:.!P.::.Y7.:.!@P                ")
        print("            :&G~!!~Y5~!!!G?~!~7G!!!~PJ~!!!G7~!B&@&B#J~5Y!!!7G7!!!Y5!!!?G!!!!PJ!!!?@P                ")
        print("            .&P    ?J    5^   .P    Y~    P: .&@@&@@7 ?7   .P.   7?   ^5    J!   ^@P                ")
        print("            .#B777!JJ!77!P57!7YP?JJ755J77757!7PG&&BBJ!YJ!!!7GJ7!?5Y7J7?PJ7!!Y?!!!J@P                ")
        print("            .#G   :::~^ 77:.~^^P#?.~::!?..^~:^. BG  .:::^:.?!::~:7BG^^^:~J^.^~:^:^@P                ")
        print("            .#G   .7YJ7!5  .J!~JG7~Y!  ?!77YJ!  BG   .7Y?7!J  ~Y~!P5~7Y. ^J~7JJ7.^@P                ")
        print("           .#G  :!J?JPB&J.    :J .   ^GBG577?~:BG  :~J?YG##!   . 7! .  .J#BP?7J~~@P               ")
        print("            .#G.7~::: .:7BBY7^^^^^:^75#J^. .^::!#G.7~:::..~J#G?~^^^:::~JBP!: .^::7@P            ")
        print("            .#G^J .?7!    ?77PJ^^^55!Y^   .J7! ^&G:J .?7~   :Y7JP!^^7PJ??    ?77 ~@P          ")
        print("     .BB ~5555777. :? ^~. :^.:?  :?7J5PPJBB ~Y55Y7?!. !~ ~^  ^^ ?: .!7?5PP5@P               ")
        print("             BB:?~^???..  ^7!5!  ^Y?:J.  .^J?!:~&B.7!~??7..  !!?Y: .7Y^7^  .:J?7:7@P            ")
        print("             BB:J: ~~.  .!B5J7!!~~!?YPP~.  :~:.!&B.J. !!:  .7GYJ7!!~!?J5G7.  :~^ !@P          ")
        print("             BB..~~~~~75G#J^.   ~.   :7BB5?!!~~^GB .~~~~~75B#?^.  .^   :!GBP?!!~~!&G        ")
        print("             B#.  .77?PYY~  ^~^~P!^~^  ~55JJ?^  G#   .77JGJ5^  ^^^7Y^^~. .55YJ?~ :&G      ")
        print("             B#   .!J7! !!  77.Y&5.!?  7!:~7^:  G#   .!Y7! ?^ .J~^B#~:J^ :J:~7~^ :&G    ")
        print("             G&777?77J?77Y5J7?YPPPY?7J5Y!!7!!!!!B#!!!?77J?!75Y7775GGP?77YPJ7??7??J@G  ")
        print("             G#777777!777!77777!!!77777!77777777PG777!!!!!!!!!!!!!~~!!!!!~~~~~~~~!B5")
        print("             ::                                 ^^                                . ")

        print("You find an entrance to a closed metal gate, This gate could lead so somewhere, but it requires a key to open it.")

        print("\n(1)Walk away")

        input = getInput();

        if (input == "1") {

            screen = "Right path CHECK";
        }



    }


    if (screen == "tree puzzle" && treeEssence == true && dungeonKey == true && dungeonGate == false) {


        print("\n\n                                       ..............                                               ")
        print("                          .:~!7?YY55PPPPPPPPBGGGGGPGGPPP555YYJ?7!~^:.                               ")
        print("                     .~?Y5PP5YJ7!~^::^^:...7:^7?J!~:?::^^^^~!!?JY55PPPYJ7^.                         ")
        print("                  ~JPBBP5J:       .:~!!!!!!J?^.J5.^?J!!~~!!~:.      .^YPPBBPY!.                     ")
        print("               :JGGJ~J^ ~?.  .^~!7??7!^:..:^7YJJ5YP7^:...:~7??7!~^.  .?~ ^J^?PBY^                   ")
        print("             .J&G7:  :!~~^^~~~!77~.    :^^:   !#@J   .^^:    .~7?7~~~^^~~!:  :!G&Y.                 ")
        print("             5@5:^5:    ..:^!J!!~^~^. !!.7Y.  :B&7   JJ:^? .^~^~!!J7^::.    ^5^:5@G.                ")
        print("            ~@57:::..::^~~~::!:7!  .^~??:::.:~!^!77^.:::!Y~^:  !7:!::~~~^::..::^7?@J                ")
        print("            7@P5GBGGGBGP5YYYY5P5555YY55GBBGBGPY5P5PGGBGGG55YYY555P5YYYY5PGGBGGBG5P@5                ")
        print("            !@?.:.:^^.:::^:::::^::::^^:..:^:.:.!@Y.:::^:::::^::::::::::^::::^:.:.7@5                ")
        print("            !@7 ...Y5....G7 . !G: ..P? . ^B~ . ^@J    YY   ^G^   YJ   !P.  .5?   !@5                ")
        print("            !@Y~~~~Y5~~!~G?~~~7B!~~~PJ~~~!G7~~~7@5~~!~5Y~~~!G!~!~55~!~?G~~~~PJ~~~J@5                ")
        print("            !@?    7J    5^   :P    Y!    P:   ^@J    ?7   .P.   7?   ^5    J!   !@5                ")
        print("            ~@?    ?J    5^   :P.   Y!    P:   ^@J    ??   .P.   7?   ^5    J!   !@5                ")
        print("            ~@?    ?J    5^   :P.   Y!    P:   :@J    ??   .P.   7?   ^5    J!   !@5                ")
        print("            ~@?    ?J    5^   :P.   Y!    P:   :@Y    ??   .P.   7?   ^5    J!   ~@5                ")
        print("            ~@J    ?J    5^   :P.   Y!    P:   :@Y    ??   .P.   7?   ^5    J!   ~@5                ")
        print("            ^@J    ?J    5^   :P.   Y!    P:   :&Y    ??   .P.   7?   ^5    J!   ~@5                ")
        print("            ^@J    7J    5~   :P..  Y!  . P:   :&Y    ?7   .P.   7? . ^5  . J! . ~@5                ")
        print("            ^@J  .:JY::  5~ .^~P^:  Y!  :^G~^. :&5  .:J?:. .P. .:?Y^. ^5  .^5?:. ~@5                ")
        print("            ^@Y    5G    5^   7&^   Y!   ^&?   .&5    5P   .P.   PP   ^5   .B5   ~@5                ")
        print("            ^@Y  .:Y5:.  5~ .:!G~:. Y! .:^G!:. .&5  .:55:. .P. .:Y5:. ^5  :^5J:. ~@5                ")
        print("            ^@Y  :.?J.:  5~ ..:P... Y! .. P:.. .&5  :.??.: .P. :.7? . ^5  . J!.. ~@P                ")
        print("            ^@Y    ?J    5^   :P.   Y!    P:   .&5    ??   .P.   7?   ^5    J!   ~@P                ")
        print("            :@5    ?J    5^   :P.   Y!    P:   .#5    ??   .P.   7?   ^5    J!   ~@P                ")
        print("            :@5    ?J    5^   :P.   Y!    P:   .#P    ??   .P.   7?   ^5    J!   ~@P                ")
        print("            :@5    ?J    5^   :P.   Y!    P:   .#P    ??   .P.   7?   ^5    J!   ~@P                ")
        print("            :&P    ?J    5^   :P.   Y!    P:   .#P    ??   .P.   7?   ^5    J!   ^@P                ")
        print("           :&P    7J    5^   :P    Y!    P:    #P    ?7   .P.   7?   ^5    J!   ^@P                ")
        print("            :&G::::JY::::P!:::~G^:::57:::^G~::::#G..:.J?.::^G^::.?J.:.!P.::.Y7.:.!@P                ")
        print("            :&G~!!~Y5~!!!G?~!~7G!!!~PJ~!!!G7~!B&@&B#J~5Y!!!7G7!!!Y5!!!?G!!!!PJ!!!?@P                ")
        print("            .&P    ?J    5^   .P    Y~    P: .&@@&@@7 ?7   .P.   7?   ^5    J!   ^@P                ")
        print("            .#B777!JJ!77!P57!7YP?JJ755J77757!7PG&&BBJ!YJ!!!7GJ7!?5Y7J7?PJ7!!Y?!!!J@P                ")
        print("            .#G   :::~^ 77:.~^^P#?.~::!?..^~:^. BG  .:::^:.?!::~:7BG^^^:~J^.^~:^:^@P                ")
        print("            .#G   .7YJ7!5  .J!~JG7~Y!  ?!77YJ!  BG   .7Y?7!J  ~Y~!P5~7Y. ^J~7JJ7.^@P                ")
        print("           .#G  :!J?JPB&J.    :J .   ^GBG577?~:BG  :~J?YG##!   . 7! .  .J#BP?7J~~@P               ")
        print("            .#G.7~::: .:7BBY7^^^^^:^75#J^. .^::!#G.7~:::..~J#G?~^^^:::~JBP!: .^::7@P            ")
        print("            .#G^J .?7!    ?77PJ^^^55!Y^   .J7! ^&G:J .?7~   :Y7JP!^^7PJ??    ?77 ~@P          ")
        print("     .BB ~5555777. :? ^~. :^.:?  :?7J5PPJBB ~Y55Y7?!. !~ ~^  ^^ ?: .!7?5PP5@P               ")
        print("             BB:?~^???..  ^7!5!  ^Y?:J.  .^J?!:~&B.7!~??7..  !!?Y: .7Y^7^  .:J?7:7@P            ")
        print("             BB:J: ~~.  .!B5J7!!~~!?YPP~.  :~:.!&B.J. !!:  .7GYJ7!!~!?J5G7.  :~^ !@P          ")
        print("             BB..~~~~~75G#J^.   ~.   :7BB5?!!~~^GB .~~~~~75B#?^.  .^   :!GBP?!!~~!&G        ")
        print("             B#.  .77?PYY~  ^~^~P!^~^  ~55JJ?^  G#   .77JGJ5^  ^^^7Y^^~. .55YJ?~ :&G      ")
        print("             B#   .!J7! !!  77.Y&5.!?  7!:~7^:  G#   .!Y7! ?^ .J~^B#~:J^ :J:~7~^ :&G    ")
        print("             G&777?77J?77Y5J7?YPPPY?7J5Y!!7!!!!!B#!!!?77J?!75Y7775GGP?77YPJ7??7??J@G  ")
        print("             G#777777!777!77777!!!77777!77777777PG777!!!!!!!!!!!!!~~!!!!!~~~~~~~~!B5")
        print("             ::                                 ^^                                . ")

        print("You find an entrance to a closed metal gate, This gate could lead so somewhere, but it requires a key to open it.")

        print("\n(1)Walk away\n(2)Use key")

        input = getInput();

        if (input == "1") {

            screen = "Right path CHECK";
        }

        if (input == "2") {

            dungeonGate = true
            screen = "tree puzzle"
        }


    }

    if (screen == "tree puzzle" && treeEssence == true && dungeonKey == true && dungeonGate == true) {


        print("                                      ...:::::::::::::.....                                         ")
        print("                           :^!7JY55PPPPPPPP5PBGGGGGPGGPPPPPP55YYJ?7~^:.                            ")
        print("                       :!JPPP5YJ7!~^:...::.. 7^.!7J!~ 7:.:^:.:^~!7?JY5PP55J!^.                      ")
        print("                  .~YPBB5JJ~      .:^!77!!77JY!.7P.~JJ7!!!!77~^.      :YYYGBG5?^                   ")
        print("                :JGP?^!7 :7^ .:^~!7?7!^:.  .:~?5JP55!:.   .:~7??!~^:. .7~ ~?.!YBP~                 ")
        print("               ?&B?^.  ^!~^~~~~!?7~:    ^~~^.  :B@Y   :~~~.   .^7?7~~~~~~!~.  ^!P@P:               ")
        print("             ?@B: J7     .:^!Y!~~:^~^.~7 ~Y:  :5#Y   7J.:J.:~~:^!~J7~^.     ^Y:.5@B:              ")
        print("             .BB!!~^^^~~!!!~^:!~!?...^~7Y!~^^~!7:!!?!~^^~?Y!~:..!?~!::~!!!~~^^^^!!?@?              ")
        print("             .#&BGPPPPGPP5555555555555555GGGGGP555Y5PGGGGP5555555555555555PPPPG&#B#@J              ")
        print("             .B@@&G?!^.                                                   .^?YP5&@@@J              ")
        print("             .B@@@B:!7JJ7~:                                           .^7Y5Y?!^~G@@@J              ")
        print("             .B@@@B!Y:!:!?YYJ~                                        PB7!~7~5JGB@@@J              ")
        print("               B@@@G7BYBJ5J^7#P                                        BBYYGBJG!P5@@@Y              ")
        print("               B@@@P^5^5?PBYB&5                                        GBP?55~5^PY@@@Y              ")
        print("               B@@@P~5~Y7JG~P#5                                        GG5!P5!P^PY@@@Y              ")
        print("               G@@@5!Y~Y?JG~P#Y                                        PB5!P5!P^PJ@@@Y              ")
        print("               G@@@57J!JJJP~P#Y                                        PB5~PY!P^P?@@@Y              ")
        print("               G@@@5?J7JJJP!P#J                                        5BP~PY!5^57@@@Y              ")
        print("               G@@@5????YJ5!P&?                                        5#5~PY?5!GY&@@Y              ")
        print("               G@@@GB5JYGP5?P&?                                        Y&#YGBG57#P&@@Y              ")
        print("               P@@@5BJJJ#G5P#@7                                        J&#JPPPY!G5#@@Y              ")
        print("               P@@@P#?YJ#PYPB@7                                        J@#YPGG57G5#@@Y              ")
        print("              P@@@YP7Y7GPJ5B@!                                        ?&P!5YJJ!J7B@@Y              ")
        print("               P@@@?5^5~557?P@~                                        ?@P!YYY?7J?B@@5              ")
        print("              P@@@?P^5~5P!JP@~                                        7@P7J5Y7???G@@5              ")
        print("              5@@@?P^5~5P!YP@^                                        7@P7J5Y7?7JG@@5              ")
        print("               5@@@?P^P~5P~YG@^                                        !@P??5Y!J7JP@@5              ")
        print("               5@@@7P:P~5P^YG&^                                        ~@GJ7PY!J!J5@@5              ")
        print("               5@@@7P^P!PG7PB&:                                        ~@BPYBGYPJ5P@@5              ")
        print("               Y@@@5BJBJGB!PB&:                                        ^@BY~P5~P7PP@@5              ")
        print("               Y@@&75^5~PG!P##.                                        ^@&YGBBJP!5Y@@5              ")
        print("               Y@@&JPYBG&PG5@#.                                        ^&@#GP@PBPJG@@5              ")
        print("               Y@@&YJB5#@5B@@#.                                        :&@@PY#G5#GB&@P              ")
        print("               J@@&B@#?55?&B@B.                                        :&#P&J?!Y@@&&@P              ")
        print("               J@@@&#&5?Y#GP@B                                         .#@5G&YP&5J#@@P              ")
        print("               J@@@575&YY&YB@G                                         .#@PPP75B75G@@P              ")
        print("               J@@&GB?B?7BYB@G                                         .B@YPB75GY#B@@P              ")
        print("               ?@@@#BJ#5J&P5@P                                         .B@P&PJ&BJB#@@P              ")
        print("               ?@@&PGY@P?Y&#@P                                          B@&P!?Y&5YP@@P             ")
        print("               ?@@&YJ#P?5?GB@5                                          G@PPG&YP&P#&@P           ")
        print("               ?@@&B@#Y#&GBG&J                                          ~YG&B@PY@@&&@P         ")
        print("               ?@@&###YB@#G?:                                             .!5###PYB@@P       ")
        print("              7@@&YY#&G?:                                                   .7P#B#@@P     ")
        print("               7@@@&G?:                                                         :7P&@G   ")
        print("               7@B?^                                                               ^JJ   ")

        print("The dungeon gate is open, you can enter to see what's inside.")

        print("\n(1)Walk away (2)Go in")

        input = getInput();

        if (input == "1") {

            screen = "Right path CHECK";
        }

        if (input == "2") {

            screen = "Dungeon"
        }

    }


    if (screen == "Dungeon" && mistGaurdianBeaten == false) {

        print("\n         .--.")
        print("        /.--.\\")
        print("        |====|")
        print("        |`::`|")
        print("    .-;`\\..../`;-.")
        print("   /  |...::...|  \\")
        print("  |   /'''::'''\\   |")
        print("  ;--'\\   ::   /\\--;")
        print("  <__>,>._::_.<,<__>")
        print("  |  |/   ^^   \\|  |")
        print("  \\::/|        |\\::/")
        print("  |||\\|        |/|||")
        print("  ''' |___/\\___| '''")
        print("       \\_ || _/")
        print("       <_ >< _>")
        print("       |  ||  |")
        print("       |  ||  |")
        print("      _\\.:||:./_")
        print("     /____/\____\\")

        print("\nYou slowly step into the dungeon, the gate behind you closes and right in front of you is the Mist Guardian. \nThe Mist guardian hunts and kills unwanted travellers that come into the forest. ")
        Fun.threadSleep(3000)

        print("NOTE: The Mist Guardian deals 35 damage every attack but has terrible accuracy and has 600 health.");

        print("\n(Has a 50% chance of hitting you)");

        count = 0

        playerHealth = maxPlayerHealth;

        Fun.threadSleep(3000)

        screen = "Mist Guardian Boss"

    }

    if (screen == "Dungeon" && mistGaurdianBeaten == true) {

        print("\n\n                                   _______________________      |")
        print("                                  |  ________   ________  |     |")
        print("                                  | |        | |    ___ | |     |")
        print("                                  | |        | |  ,',.('| |     |")
        print("                                  | |        | | :  .'  | |     |")
        print("                                  | |        | | :) _  (| |     |")
        print("                                  | |        | |  `:_)_,| |     |")
        print("                                  | |________| |________| |     |")
        print("                                  |  ________   ________  |     |")
        print("                                  | |        | |        | |     |")
        print("                                  | |        | |        | |     |")
        print("                                  | |        | |        | |     |")
        print("                                  | |        | |        | |     |")
        print("                                  | |        | |        | |     |")
        print("                                  | |________| |________| |     |")
        print("                                  |_______________________|     |")
        print("                                                                |")
        print("                                                                |")
        print("                   _____________________________________________|")
        print("                                                              `.")
        print("                                                                  `.")
        print("                                                                    `.")
        print("                                                                      `.")
        print("                     ..::::::::::::' .:::::::::::::::                   `.")
        print("                 ..:::::::::::::::' .:::::::::::::::'                    `")
        print("             ..:::::::::::::::::' .:::::::::::::::::")
        print("         ..::::::::::::::::::::' .:::::::::::::::::'")
        print("     ..::::::::::::::::::::::' .:::::::::::::::::::")
        print(" ..:::::::::::::::::::::::::' .:::::::::::::::::::'")
        print("..........................  ......................")
        print(":::::::::::::::::::::::::' .:::::::::::::::::::::'")
        print(":::::::::::::::::::::::' .:::::::::::::::::::::::")
        print("::::::::::::::::::::::' .:::::::::::::::::::::::'")
        print("::::::::::::::::::::' .:::::::::::::::::::::::::")
        print(":::::::::::::::::::' .:::::::::::::::::::::::::'                              ")


        print("\nhere nothing worth seeing here.")

        print("\n(1)Go back")

        input = getInput();

        if (input == "1") {

            screen = "tree puzzle CHECK"
        }
    }

    if (screen == "Mist Guardian Boss" && playerHealth > 0 && mistGuardianHealth > 0) {

        mistGuardianAttackRandom = Math.random();

        normalAttack = strength * 0.1
        strongAttack = strength * 0.25
        heal = strength * 0.1












        print("\n      _,.")
        print("      ,` -.)")
        print("     ( _/-\\\\-._")
        print("    /,|`--._,-^|            ,")
        print("    \\_| |`-._/||          ,'|")
        print("      |  `-, / |         /  /")
        print("      |     || |        /  /")
        print("       `r-._||/   __   /  /")
        print("   __,-<_     )`-/  `./  /")
        print("  '  \\   `---'   \\   /  /")
        print("      |           |./  /")
        print("      /           //  /")
        print("  \\_/' \\         |/  /")
        print("   |    |   _,^-'/  /")
        print("   |    , ``  (\\/  /_")
        print("    \\,.->._    \\X-=/^")
        print("    (  /   `-._//^`")
        print("     `Y-.____(__}")
        print("      |     {__)")
        print("            ()")




        if (mistGuardianAttackRandom > 0.50 && count > 0) {

            print("\n(Mist Guardian has dealt", 35, "damage to you)")

            playerHealth = playerHealth - 35;


        } else if (mistGuardianAttackRandom <= 0.50) {
            print("\n(Mist Guardian Missed)")

        }




        print("\n\n||Your health is", playerHealth + "||")


        print("\n\n|| Mist Guardian Health is", mistGuardianHealth + "||");

        print("\n\n(1) Normal attack 75% chance it hits and it deals", normalAttack)
        print("\n(2) Strong attack: 45% chance of hitting and deals", strongAttack)
        print("\n(3) Heal: Heals", heal, "of health ")

        count = count + 1

        input = getInput();

        if (input == "1") {
            playerAttackRandom = Math.random();
            if (playerAttackRandom <= 0.75) {
                print("\n\n\n\nYou dealt", normalAttack, "damage to the the Mist Guardian ")
                mistGuardianHealth = mistGuardianHealth - normalAttack;
                Fun.threadSleep(1000)

            } else {
                print("\n\n\n\nYou missed the attack")
                Fun.threadSleep(1000)


            }

        }

        if (input == "2") {
            playerAttackRandom = Math.random();
            if (playerAttackRandom <= 0.45) {
                print("\n\n\n\nyou dealt", strongAttack, "damage to the Mist Guardian ")
                mistGuardianHealth = mistGuardianHealth - strongAttack;
            } else {
                print("\n\n\n\nYou missed the attack")
            }
            Fun.threadSleep(1000)
        }

        if (input == "3") {
            print("\n\n\n\nyou healed", heal, "health")
            playerHealth = playerHealth + heal;
            Fun.threadSleep(1000)
        }

    }

    if (screen == "Mist Guardian Boss" && playerHealth < 1) {
        print("\n\n__   __           ______ _          _")
        print("\\ \\ / /           |  _  (_)        | |")
        print(" \\ V /___  _   _  | | | |_  ___  __| |")
        print("  \\ // _ \\| | | | | | | | |/ _ \\/ _` |")
        print("  | | (_) | |_| | | |/ /| |  __/ (_| |")
        print("  \\_/\\___/ \\__,_| |___/ |_|\\___|\\__,_|")
        gameOver = true
    }

    if (screen == "Mist Guardian Boss" && mistGuardianHealth < 1) {

        coins = coins + 600;
        print("\nYOU WON, you get", 600, "coins")
        print("\nYou have", coins, "coins")

        mistGaurdianBeaten = true;
        screen = "Dungeon"

    }









    if (screen == "") {

        print("ERROR")
        treeImmobilizer = true
        treeEssence = false
        treeImmobilizer = false
        dungeonGate = false;
        dungeonKey = false;
        mistGaurdianBeaten = false;

    }

    if (screen == "death") {

        print("\n\n__   __           ______ _          _")
        print("\\ \\ / /           |  _  (_)        | |")
        print(" \\ V /___  _   _  | | | |_  ___  __| |")
        print("  \\ // _ \\| | | | | | | | |/ _ \\/ _` |")
        print("  | | (_) | |_| | | |/ /| |  __/ (_| |")
        print("  \\_/\\___/ \\__,_| |___/ |_|\\___|\\__,_|")
        gameOver = true;
    }






















}



