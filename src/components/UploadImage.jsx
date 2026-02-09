function UploadImage() {
  return (
    <form className="upload">
      <input type="file" accept="image/*" />
      <textarea placeholder="Comentario o contexto de la imagen (opcional)" />
      <button>Publicar</button>
    </form>
  );
}

export default UploadImage