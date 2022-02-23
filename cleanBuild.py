# Script para limpar artefatos gerados pelo build

import os
import shutil

to_delete__folders = []

# lista as pastas e subpastas
for root, dirs, files in os.walk("."):
    # pastas com nome target
    if "target" in dirs and "node_modules" not in root:
        to_delete__folders.append(os.path.join(root, "target"))

    # pastas com nome dist
    if "dist" in dirs and "node_modules" not in root:
        to_delete__folders.append(os.path.join(root, "dist"))

    # clientlib-dependencies
    if "clientlib-dependencies" in dirs and "ui.apps" in root:
        to_delete__folders.append(os.path.join(root, "clientlib-dependencies"))

    # clientlib-site
    if "clientlib-site" in dirs and "ui.apps" in root:
        to_delete__folders.append(os.path.join(root, "clientlib-site"))


print("\nPastas a serem apagadas:")
for folder in to_delete__folders:
    print(folder)

print("\nProsseguir com a limpeza? (s/n)")
if input().strip().lower() == "s":
    for folder in to_delete__folders:
        print("Apagando pasta: " + folder)
        shutil.rmtree(folder, ignore_errors=True)

    print("\nLimpeza concluída!")
else:
    print("\nLimpeza cancelada!")
