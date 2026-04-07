

## Fit All Contact Cards on One Line

There are 5 contact cards (Phone, Fax, Email, Address, Hours) in a grid that currently maxes at `lg:grid-cols-4`. To fit all 5 on one row, we need to adjust the grid and reduce card padding.

### Changes in `src/components/ContactSection.tsx`

1. Change grid classes from `sm:grid-cols-2 lg:grid-cols-4` to `sm:grid-cols-2 lg:grid-cols-5`
2. Reduce card padding from `p-6` to `p-4`
3. Reduce icon container from `w-12 h-12` to `w-10 h-10` and icon from `w-5 h-5` to `w-4 h-4`
4. Reduce bottom margin on icon container from `mb-4` to `mb-2`

This keeps the cards readable while fitting all 5 across on desktop viewports.

