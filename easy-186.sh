# 1
ls -ltrR | tail -n 20 > easy-186-result.txt
# 2
cd
cat .zsh_history | tail -n 10
# 3
ps -er | head -n 10
# 4
cd /var/log
cat $(ls | head -n 20)
# 5
find -E . -regex ".*\.(txt|pdf|exe)"
