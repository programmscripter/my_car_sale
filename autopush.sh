while true; do
    git add .
    git commit -m "Автоматическое обновление"
    git push origin main
    sleep 10
done