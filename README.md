Git commands to use:
Racunaj da kreces uvek sa main ili master grane.

Kada hoces samo da napravis novu granu:
git checkout -b ime_grane            (-b  kucas samo  prvi put kada  imenujes granu svaki  sledeci put ako grana vec postoji samo kucas  git checkout ime_grane)


1.)Kada  hoces da promene uploadujes na svoju  trenutnu  granu:
- git add .
- git commit -m "neka poruka"
- git push git push --set-upstream origin ime_grane              (prvi put se samo kuca --set-upstream) ako grana postoji svaki sledeci  put dovoljno je samo git push

2.) drugi nacin bez pralvjenja nove grane jer ti mozdan ne treba
A to znaci da direktno pushujes na main/master

- git add .
- git commit -m "neka poruka"
- git push
