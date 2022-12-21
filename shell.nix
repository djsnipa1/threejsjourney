# https://nix.dev/tutorials/declarative-and-reproducible-developer-environments
# with import <nixpkgs> { };
{
  pkgs ?
    import (fetchTarball {
      url = "https://github.com/NixOS/nixpkgs/archive/a5f661b80e4c163510a5013b585a040a5c7ef55e.tar.gz";
      sha256 = "0v0f5h31iqmcx61nylhn111j7r56m8lx04xllh0p4d13k2gl0hc5";
    }) {},
}:
pkgs.mkShell {
  buildInputs = with pkgs; [
    lf
    neovim
    nodejs
    nodePackages.pnpm
    direnv
    lf
    gh
    bat
    lazygit
    alejandra
    figlet
    toilet
    lolcat
    boxes
    git-ignore
    fish
    http-prompt
    httpie
    fd
    glances
    tree
    delta
  ];

  NIX_ENFORCE_PURITY = true;

  shellHook = ''
  '';
}
# mkShell {
# Package names can be found via https://search.nixos.org/packages
# nativeBuildInputs = [
# ];
# NIX_ENFORCE_PURITY = true;
# shellHook = ''
# '';
# }

