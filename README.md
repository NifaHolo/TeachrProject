installez nodejs à l'aide de votre navigateur préféré

-----------------------

installez java jdk 15 à l'aide de votre navigateur préféré

appuyer sur votre touche windows puis tapez environnement,

cliquez sur "modifier les variables d'environnement système"

une fenetre " propriété système " apparait, cliquez sur "variable d'environnement", une nouvelle fenetre " variables d'environnement " apparaît.

regardez "variables utilisateur pour (Nom d'utilisateur) puis cliquer sur "nouvelle..."

Mettez comme nom de la variable "JAVA_HOME"

Allez dans l'éxplorateur de fichier windows puis trouver le chemin vers le dossier "java" pour ma part c'est : " C:\Program Files\Java "

allez ensuite dans le dossier JDK

Copiez le chemin vers votre fichier JDK pour ma part c'est : C:\Program Files\Java\jdk-15.0.2

(vérifiez bien votre chemin vers JDK nous n'avons pas forcémént le meme chemin !)

Mettez ensuite le chemin dans la valeur de votre variable JAVA_HOME puis validez

-----------------------------------------

installez android studio à l'aide de votre navigateur préféré

Si vous n'avez pas de projet, cliquer sur "new project", puis cliquez sur " empty activity " puis appuyez sur next et cliquez ensuite sur finish

Dans android studio regardez en haut de votre fenetre puis cliquez sur "Tools" ensuite "sdk manager" cochez "Android 12.0, 11.0, 10.0, ainsi que la 9.0(pie)" puis appuyez sur ok puis ok, cochez accepter puis next, attendez que l'installation finisse et appuyez sur finish.

Retourner ensuite dans Tools puis dans AVD manager,

Cliquez sur "create virtual device"

choisissez Pixel 3a puis cliquez sur next,

installer ensuite "Pie" (le bouton est situté à sa gauche ou à droite cochez accepter puis next, attendez que l'installation finisse et appuyez sur finish, il n'y auras pas de bouton si vous l'avez déjà) ensuite séléctionner "pie" puis cliquez sur next puis finish

-----------------------------------------

appuyer sur votre touche windows puis tapez environnement,

cliquez sur "modifier les variables d'environnement système"

une fenetre " propriété système " apparait, cliquez sur "variable d'environnement", une nouvelle fenetre " variables d'environnement " apparaît.

regardez "variables utilisateur pour (Nom d'utilisateur) puis cliquer sur "nouvelle..."

Mettez comme nom de la variable "ANDROID_HOME"

Allez dans l'éxplorateur de fichier windows puis trouver le chemin vers le dossier "android" qui est dans appdata faites la touche windows + r puis tapez %appdata% faites la touche retour qui est au dessus de la touche entrée sur votre clavier, puis allez dans local et trouvez android pour ma part le chemin vers "android" c'est : " C:\Users\Nom d'utilisateur\AppData\Local\Android "

allez ensuite dans le dossier SDK

Copiez le chemin vers votre fichier SDK pour ma part c'est : C:\Users\Nom d'utilisateur\AppData\Local\Android\Sdk

(vérifiez bien votre chemin vers JDK nous n'avons pas forcémént le meme chemin !)

Mettez ensuite le chemin dans la valeur de votre variable ANDROID_HOME puis validez

-----------------------------------------

Appuyez sur la touche windows de votre clavier puis tapez cmd et cliquer sur "invite de commande" et entrez la commande : "npm install -g react-native-cli" puis appuyer sur la entrée de votre clavier et attendez que l'installation se termine.

Retournez la ou vous aviez copier le chemin pour SDK(ANDROID_HOME) qui est dans l'étape du dessus du trait

Allez dans emulator puis copiez le chemin.

Allez ensuite dans le terminal puis tapez la commande "cd (puis faire clic droit paste)"(vérifiez bien qu'il y ait un espace entre cd et le chemin) puis appuyez sur la touche entrée

vérifiez si l'avd de votre android studio a bel est bien été crée grâce à la commande "emulator -list-avds" à taper dans votre invite de commande

si l'AVD à bel et bien été crée elle s'afficheras dans l'invite de commande.

si l'avd Pixel_3a_API à été crée faite la commande dans l'invité de commande "emulator -avd Pixel_3a_API_28" (<- votre avd listé) un émulateur de téléphone s'ouvriras, ne le fermer pas et ne fermer pas non plus l'invite de commande.

Si l'avd n'as pas été crée refaites l'étape de création d'avd qui est dans l'étape du dessus du trait

-----------------------------------------

Pour finir télécharger le projet sous zip, extrayer le ou vous le souhaitez allez ensuite dans le projet puis dans ReactTeachs, copiez le chemin du fichier puis entrez dans un nouvel invite de commande la commande "cd (puis faire clic droit paste)"(vérifiez bien qu'il y ait un espace entre cd et le chemin) puis appuyez sur la touche entrée.

entrez ensuite la commande dans un l'invite de commande "npm install" puis appuyez sur entrée

lancer ensuite l'émulateur grâce à la commande à taper dans l'invite de commande "npx react-native run-android"
