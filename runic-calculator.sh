#!/usr/bin/env bash

# Remplacer `echo` par la commande permettant d'exécuter votre programme
# Gardez bien l'instruction `$*`, c'est elle qui permet de rediriger les paramètre de ce script à votre programme.

echo $*

# Exemples : 
#  

node runic-calculator/dist/index.js $*