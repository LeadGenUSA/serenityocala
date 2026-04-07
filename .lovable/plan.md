

## Darken Logo Teal Glow

**`src/components/Header.tsx`** — Change the logo's `drop-shadow` from the current bright teal glow to a darker, more saturated teal that provides contrast for the white logo:

```
drop-shadow-[0_0_15px_rgba(93,173,161,0.9)]
```
→
```
drop-shadow-[0_0_25px_rgba(20,100,90,1)] drop-shadow-[0_0_50px_rgba(20,100,90,0.8)]
```

This uses a much darker teal (`rgb(20,100,90)`) with a double drop-shadow — a tight 25px glow plus a wider 50px spread — creating a dark enough backdrop behind the logo for white elements to stand out clearly.

