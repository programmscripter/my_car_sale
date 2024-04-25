while true; do
    git add .
    git commit -m "Автоматическое обновление"
    git push origin main
    sleep 5
done