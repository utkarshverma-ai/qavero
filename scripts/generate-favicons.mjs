import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const svg = readFileSync(join("public", "favicon.svg"), "utf-8");

const sizes = [16, 32, 48, 180];

const pngBuffers = {};

for (const size of sizes) {
  const buf = await sharp(Buffer.from(svg))
    .resize(size, size)
    .png()
    .toBuffer();

  pngBuffers[size] = buf;

  if (size === 180) {
    writeFileSync(join("public", "apple-touch-icon.png"), buf);
    console.log(`Generated apple-touch-icon.png ${size}x${size}`);
  } else {
    writeFileSync(join("public", `favicon-${size}x${size}.png`), buf);
    console.log(`Generated favicon-${size}x${size}.png ${size}x${size}`);
  }
}

// Build .ico with embedded PNGs (16, 32, 48)
const icoSizes = [16, 32, 48];
const icoImages = icoSizes.map((s) => pngBuffers[s]);
const icoData = encodeIco(icoImages, icoSizes);
writeFileSync(join("public", "favicon.ico"), icoData);
console.log("Generated favicon.ico");

function encodeIco(images, sizes) {
  const numImages = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(numImages, 4); // count

  const dirEntries = [];
  let offset = 6 + numImages * 16;

  const imageBuffers = images.map((img, i) => {
    const buf = img;
    const w = sizes[i] >= 256 ? 0 : sizes[i];
    const h = sizes[i] >= 256 ? 0 : sizes[i];
    const entry = Buffer.alloc(16);
    entry.writeUInt8(w, 0);
    entry.writeUInt8(h, 1);
    entry.writeUInt8(0, 2); // colors
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(buf.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset
    offset += buf.length;
    return entry;
  });

  const body = Buffer.concat(imageBuffers);
  const dir = Buffer.concat(dirEntries);
  return Buffer.concat([header, dir, body]);
}

console.log("Done");
