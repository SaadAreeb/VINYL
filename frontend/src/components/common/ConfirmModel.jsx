import { motion, AnimatePresence } from "framer-motion";

const ConfirmModal = ({
  isOpen,
  title,
  message,
  onCancel,
  onConfirm,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}

          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="
                w-full
                max-w-md
                rounded-3xl
                border
                border-white/10
                bg-[#17171d]
                p-8
                shadow-[0_0_40px_rgba(236,72,153,.15)]
              "
            >
              <h2 className="text-2xl font-bold">
                {title}
              </h2>

              <p className="mt-4 text-gray-400">
                {message}
              </p>

              <div className="mt-8 flex justify-end gap-4">
                <button
                  onClick={onCancel}
                  className="
                    rounded-xl
                    border
                    border-white/10
                    px-6
                    py-3
                    hover:bg-white/5
                  "
                >
                  Cancel
                </button>

                <button
                  onClick={onConfirm}
                  className="
                    rounded-xl
                    bg-red-500
                    px-6
                    py-3
                    font-semibold
                    transition
                    hover:bg-red-600
                  "
                >
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ConfirmModal;