import sys
import json

DATE = "2020-06-20-"

def create_post_file(posts_dir, comment_id):
    with open(posts_dir + "/" + DATE + comment_id + ".md", 'w') as f:
        f.write("""---
layout: post
title:  {}
---
        """.format(comment_id))


def main():
    input_file , posts_dir = sys.argv[1:3]

    with open(input_file, 'r') as f:
        obj = json.loads(f.read())

    for example in obj:
        create_post_file(posts_dir, example["comment_id"])

if __name__ == "__main__":
    main()
