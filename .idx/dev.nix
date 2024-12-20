{pkgs}: {
  channel = "stable-23.11";
  packages = [
    pkgs.corepack_20
    pkgs.openssl
  ];
  idx.extensions = [
    "Prisma.prisma"
    "bradlc.vscode-tailwindcss"
    "mtxr.sqltools"
    "mtxr.sqltools-driver-pg"
  ];
  services = {
    postgres = {
      enable = true;
      enableTcp = true;
    };
  };
  idx.previews = {
  };
}
