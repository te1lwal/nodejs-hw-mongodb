export const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';
    const errors = err.errors || null;
  
    res.status(status).json({
      status,
      message,
      ...(errors && { errors }),
    });
  };