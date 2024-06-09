import Queue from '../../DataStructures/Queue'

export default function bfs(head: BinaryNode<number>, needle: number): boolean {

    const q = new Queue<BinaryNode<number> | null>();
    q.enqueue(head);

    while (q.length) {

        const curr = q.dequeue() as BinaryNode<number> | undefined | null;
        if (!curr) {
            continue;
        }

        // search
        if (curr.value === needle) {
            return true;
        }
        
        // push next
        q.enqueue(curr.left);
        q.enqueue(curr.right);
    }
    return false;
}