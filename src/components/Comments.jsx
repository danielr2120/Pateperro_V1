function Comments({ comments }) {
  return (
    <section className="comments">
      <h3>Comentarios</h3>

      {comments.map(c => (
        <div key={c.id} className="comment">
          <strong>{c.autor}</strong>
          <p>{c.texto}</p>
        </div>
      ))}
    </section>
  );
}
export default Comments